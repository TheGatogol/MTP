"""Deterministic entity resolution: finds which activities/PRs/people a message talks about
before asking the LLM. The LLM only chooses among these candidates."""
import re
from dataclasses import dataclass

from app.agent.schemas import ChatContext
from app.domain.enums import CLOSED_STATUSES
from app.services.insights import Snapshot
from app.utils.text import normalize, tokens


@dataclass
class Candidate:
    entity_type: str
    entity_id: str
    name: str
    score: int
    activity_id: str | None = None


def _phrase_in(phrase: str | None, text: str) -> bool:
    p = normalize(phrase)
    return bool(p) and len(p) >= 3 and re.search(rf"(?<![a-z0-9]){re.escape(p)}(?![a-z0-9])", text) is not None


def _token_score(name: str, msg_tokens: set[str]) -> int:
    name_tokens = [t for t in tokens(name) if not t.isdigit()]
    if not name_tokens:
        return 0
    hits = sum(1 for t in name_tokens if t in msg_tokens)
    return int(45 * hits / len(name_tokens)) if hits else 0


def resolve(message: str, snap: Snapshot, context: ChatContext | None = None) -> list[Candidate]:
    text = normalize(message)
    msg_tokens = set(tokens(message))
    numbers = set(re.findall(r"\d{3,}", text))
    found: dict[tuple[str, str], Candidate] = {}

    def add(c: Candidate):
        key = (c.entity_type, c.entity_id)
        if key not in found or found[key].score < c.score:
            found[key] = c

    for pr in snap.prs.values():
        score = 0
        if pr.pull_request_number in numbers:
            score = 100
        elif pr.jira_ref and _phrase_in(pr.jira_ref, text):
            score = 100
        else:
            score = _token_score(pr.title, msg_tokens)
        if score:
            add(Candidate("pull_request", pr.id, f"PR {pr.pull_request_number} · {pr.title}", score, pr.activity_id))

    for a in snap.activities.values():
        score = 0
        for alias in a.aliases:
            if _phrase_in(alias, text):
                score = max(score, 90)
        if _phrase_in(a.title, text):
            score = max(score, 95)
        score = max(score, _token_score(a.title, msg_tokens))
        if a.status in CLOSED_STATUSES:
            score = int(score * 0.7)
        if score:
            add(Candidate("activity", a.id, a.title, score, a.id))

    for p in snap.projects.values():
        score = 0
        if p.jira_id and _phrase_in(p.jira_id, text):
            score = 100
        for alias in [p.name, *p.aliases]:
            if _phrase_in(alias, text):
                score = max(score, 85)
        score = max(score, _token_score(p.name, msg_tokens))
        if score:
            add(Candidate("project", p.id, p.name, score))

    for i in snap.initiatives.values():
        score = max([85 if _phrase_in(x, text) else 0 for x in [i.name, *i.aliases]] + [_token_score(i.name, msg_tokens)])
        if score:
            add(Candidate("initiative", i.id, i.name, score))

    for p in snap.people.values():
        names = [p.name, *p.aliases]
        if any(_phrase_in(n, text) for n in names):
            add(Candidate("person", p.id, p.name, 80))

    # Expand: PR/project/initiative/person mentions → their activities.
    for c in list(found.values()):
        if c.entity_type == "pull_request" and c.activity_id and c.activity_id in snap.activities:
            add(Candidate("activity", c.activity_id, snap.activities[c.activity_id].title, c.score - 1, c.activity_id))
        elif c.entity_type in ("project", "initiative", "person"):
            for a in snap.active_activities():
                related = (
                    (c.entity_type == "project" and a.project_dependency_id == c.entity_id)
                    or (c.entity_type == "initiative" and a.initiative_id == c.entity_id)
                    or (c.entity_type == "person" and (a.owner_id == c.entity_id or c.entity_id in a.support_people))
                )
                if related:
                    add(Candidate("activity", a.id, a.title, min(c.score, 70) - 10, a.id))

    # Screen context: the entity being viewed is always the first candidate.
    if context and context.entity_id:
        ctx_type, ctx_id = context.entity_type or "activity", context.entity_id
        name = ctx_id
        coll = {"activity": snap.activities, "pull_request": snap.prs, "project": snap.projects,
                "person": snap.people, "initiative": snap.initiatives}.get(ctx_type, {})
        if ctx_id in coll:
            e = coll[ctx_id]
            name = getattr(e, "title", None) or getattr(e, "name", None) or ctx_id
            activity_id = ctx_id if ctx_type == "activity" else getattr(e, "activity_id", None)
            add(Candidate(ctx_type, ctx_id, name, 150, activity_id))
            if ctx_type == "pull_request" and activity_id in snap.activities:
                add(Candidate("activity", activity_id, snap.activities[activity_id].title, 149, activity_id))

    return sorted(found.values(), key=lambda c: -c.score)


def candidate_activity_ids(cands: list[Candidate], limit: int = 4) -> list[str]:
    ids: list[str] = []
    for c in cands:
        aid = c.activity_id if c.entity_type != "activity" else c.entity_id
        if aid and aid not in ids and c.score >= 30:
            ids.append(aid)
        if len(ids) >= limit:
            break
    return ids
