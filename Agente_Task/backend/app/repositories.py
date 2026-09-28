"""Firestore repositories with a write-through in-memory cache.

The backend is the only writer, so each collection is read once from Firestore and then kept in
memory; every write goes to Firestore first and then to the cache. This keeps Firestore reads low
(free tier) and makes rules, search and dashboards fast. Restarting the backend reloads from Firestore.
"""
import threading
from typing import Generic, TypeVar

from app.db import get_db
from app.domain.models import (
    Action, Activity, AppSettings, Blocker, ChatMessage, ChatSession, Entity, HistoryEntry,
    Initiative, OpenQuestion, PendingChange, Person, Project, PullRequest, Recommendation, Risk,
)

T = TypeVar("T", bound=Entity)


class Repository(Generic[T]):
    def __init__(self, collection: str, model: type[T]):
        self.collection = collection
        self.model = model
        self._cache: dict[str, T] | None = None
        self._lock = threading.RLock()

    def _col(self):
        return get_db().collection(self.collection)

    def _load(self) -> dict[str, T]:
        with self._lock:
            if self._cache is None:
                cache: dict[str, T] = {}
                for doc in self._col().stream():
                    cache[doc.id] = self.model.model_validate({**doc.to_dict(), "id": doc.id})
                self._cache = cache
            return self._cache

    def all(self) -> list[T]:
        return list(self._load().values())

    def get(self, entity_id: str | None) -> T | None:
        if not entity_id:
            return None
        return self._load().get(entity_id)

    def save(self, entity: T) -> T:
        with self._lock:
            self._load()
            self._col().document(entity.id).set(entity.dump(exclude={"id"}))
            self._cache[entity.id] = entity
        return entity

    def save_many(self, entities: list[T]) -> None:
        with self._lock:
            self._load()
            db = get_db()
            for i in range(0, len(entities), 400):
                batch = db.batch()
                for e in entities[i:i + 400]:
                    batch.set(self._col().document(e.id), e.dump(exclude={"id"}))
                batch.commit()
            for e in entities:
                self._cache[e.id] = e

    def delete(self, entity_id: str) -> None:
        with self._lock:
            self._load()
            self._col().document(entity_id).delete()
            self._cache.pop(entity_id, None)

    def delete_all(self) -> int:
        """Deletes every document in the collection (used by the seed --reset)."""
        with self._lock:
            db = get_db()
            count = 0
            docs = list(self._col().stream())
            for i in range(0, len(docs), 400):
                batch = db.batch()
                for d in docs[i:i + 400]:
                    batch.delete(d.reference)
                    count += 1
                batch.commit()
            self._cache = {}
            return count

    def invalidate(self) -> None:
        with self._lock:
            self._cache = None


projects = Repository("projects", Project)
activities = Repository("activities", Activity)
actions = Repository("actions", Action)
blockers = Repository("blockers", Blocker)
pull_requests = Repository("pull_requests", PullRequest)
people = Repository("people", Person)
initiatives = Repository("initiatives", Initiative)
risks = Repository("risks", Risk)
history = Repository("history", HistoryEntry)
questions = Repository("open_questions", OpenQuestion)
pending_changes = Repository("pending_changes", PendingChange)
recommendations = Repository("recommendations", Recommendation)
chat_sessions = Repository("chat_sessions", ChatSession)
chat_messages = Repository("chat_messages", ChatMessage)
app_settings = Repository("settings", AppSettings)

# entity_type → repository (entities whose changes are tracked in history)
REPOS: dict[str, Repository] = {
    "project": projects,
    "activity": activities,
    "action": actions,
    "blocker": blockers,
    "pull_request": pull_requests,
    "person": people,
    "initiative": initiatives,
    "risk": risks,
    "question": questions,
}
TRACKED = {"project", "activity", "action", "blocker", "pull_request", "person", "initiative", "risk"}

ALL_REPOS = [
    projects, activities, actions, blockers, pull_requests, people, initiatives, risks, history,
    questions, pending_changes, recommendations, chat_sessions, chat_messages, app_settings,
]


def get_app_settings() -> AppSettings:
    s = app_settings.get("app")
    if s is None:
        s = app_settings.save(AppSettings(id="app"))
    return s
