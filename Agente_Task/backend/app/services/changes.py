"""Single write path for tracked entities. Every change produces HistoryEntry records, so the
previous state of anything is never lost."""
from typing import Any

from pydantic.alias_generators import to_camel, to_snake

from app import repositories as repos
from app.domain.enums import CreatedBy, HistorySource
from app.domain.models import Entity, HistoryEntry
from app.utils.text import new_id
from app.utils.time import now_iso

PROTECTED_FIELDS = {"id", "created_at"}
ID_PREFIX = {
    "project": "prj", "activity": "act", "action": "acn", "blocker": "blk", "pull_request": "pr",
    "person": "per", "initiative": "ini", "risk": "rsk", "question": "q",
}


class NotFoundError(Exception):
    pass


class ConfirmationRequired(Exception):
    def __init__(self, message: str, reason: str):
        super().__init__(message)
        self.reason = reason


def display_name(entity_type: str, entity: Entity | None) -> str:
    if entity is None:
        return "—"
    if entity_type == "pull_request":
        return f"PR {entity.pull_request_number} · {entity.title}"
    if entity_type == "blocker":
        return f"Bloqueo {entity.type}: {entity.description[:60]}"
    if entity_type == "question":
        return entity.question[:80]
    return getattr(entity, "title", None) or getattr(entity, "name", None) or entity.id


def activity_id_of(entity_type: str, entity: Entity) -> str | None:
    if entity_type == "activity":
        return entity.id
    return getattr(entity, "activity_id", None)


def normalize_patch(model_cls: type[Entity], data: dict[str, Any]) -> dict[str, Any]:
    """Accepts camelCase or snake_case keys; drops unknown and protected fields."""
    out = {}
    for key, value in data.items():
        name = key if key in model_cls.model_fields else to_snake(key)
        if name in model_cls.model_fields and name not in PROTECTED_FIELDS:
            out[name] = value
    return out


def record_history(
    entity_type: str, entity: Entity, field: str, old: Any, new: Any, *,
    source: HistorySource, created_by: CreatedBy, comment: str | None = None,
) -> HistoryEntry:
    entry = HistoryEntry(
        id=new_id("h"),
        entity_type=entity_type,
        entity_id=entity.id,
        entity_name=display_name(entity_type, entity),
        activity_id=activity_id_of(entity_type, entity),
        field=field,
        old_value=old,
        new_value=new,
        comment=comment,
        source=source,
        created_by=created_by,
    )
    return repos.history.save(entry)


def touch_activity(activity_id: str | None) -> None:
    activity = repos.activities.get(activity_id)
    if activity:
        now = now_iso()
        repos.activities.save(activity.model_copy(update={"last_update": now, "updated_at": now}))


def create(
    entity_type: str, entity: Entity, *, source: HistorySource = HistorySource.UI,
    created_by: CreatedBy = CreatedBy.USER, comment: str | None = None,
) -> Entity:
    repo = repos.REPOS[entity_type]
    if not entity.id:
        entity.id = new_id(ID_PREFIX.get(entity_type, "x"))
    repo.save(entity)
    if entity_type in repos.TRACKED:
        record_history(entity_type, entity, "_created", None, display_name(entity_type, entity),
                       source=source, created_by=created_by, comment=comment)
        if entity_type in ("action", "blocker", "pull_request"):
            touch_activity(activity_id_of(entity_type, entity))
    return entity


def create_from_dict(entity_type: str, data: dict[str, Any], **kwargs) -> Entity:
    model_cls = repos.REPOS[entity_type].model
    entity = model_cls.model_validate(normalize_patch(model_cls, data))
    return create(entity_type, entity, **kwargs)


def update(
    entity_type: str, entity_id: str, patch: dict[str, Any], *,
    source: HistorySource = HistorySource.UI, created_by: CreatedBy = CreatedBy.USER,
    comment: str | None = None,
) -> tuple[Entity, list[dict[str, Any]]]:
    """Applies a partial update. Returns the updated entity and the list of effective changes."""
    repo = repos.REPOS[entity_type]
    current = repo.get(entity_id)
    if current is None:
        raise NotFoundError(f"{entity_type} {entity_id} no existe")
    model_cls = repo.model
    patch = normalize_patch(model_cls, patch)
    current_data = current.model_dump()
    candidate = model_cls.model_validate({**current_data, **patch})
    candidate_data = candidate.model_dump()

    changes = []
    for field in patch:
        if field in ("updated_at", "last_update"):
            continue
        old, new = current_data.get(field), candidate_data.get(field)
        if old != new:
            changes.append({"field": to_camel(field), "oldValue": _plain(old), "newValue": _plain(new)})
    if not changes:
        return current, []

    now = now_iso()
    updates = {"updated_at": now}
    if "last_update" in model_cls.model_fields:
        updates["last_update"] = now
    updated = candidate.model_copy(update=updates)
    repo.save(updated)

    if entity_type in repos.TRACKED:
        for c in changes:
            record_history(entity_type, updated, c["field"], c["oldValue"], c["newValue"],
                           source=source, created_by=created_by, comment=comment)
        if entity_type in ("action", "blocker", "pull_request"):
            touch_activity(activity_id_of(entity_type, updated))
    return updated, changes


def delete(
    entity_type: str, entity_id: str, *, source: HistorySource = HistorySource.UI,
    created_by: CreatedBy = CreatedBy.USER, comment: str | None = None,
) -> None:
    repo = repos.REPOS[entity_type]
    current = repo.get(entity_id)
    if current is None:
        raise NotFoundError(f"{entity_type} {entity_id} no existe")
    if entity_type in repos.TRACKED:
        # The full previous state is kept in history so nothing is lost.
        record_history(entity_type, current, "_deleted", current.dump(), None,
                       source=source, created_by=created_by, comment=comment)
    repo.delete(entity_id)


def _plain(value: Any) -> Any:
    if isinstance(value, list):
        return [_plain(v) for v in value]
    if isinstance(value, dict):
        return {k: _plain(v) for k, v in value.items()}
    return value
