"""Global search over the in-memory cache (Firestore has no full-text search)."""
from typing import Any

from app import repositories as repos
from app.utils.text import normalize, tokens


def _score(query: str, q_tokens: list[str], fields: list[str | None], exact: list[str | None]) -> int:
    for e in exact:
        if e and normalize(e) == query:
            return 100
    text = " ".join(normalize(f) for f in fields if f)
    if not text:
        return 0
    if query in text:
        return 80 if text.startswith(query) else 60
    if q_tokens and all(any(t in w or w.startswith(t) for w in text.split()) for t in q_tokens):
        return 40
    return 0


def search(q: str, limit: int = 20) -> list[dict[str, Any]]:
    query = normalize(q)
    if not query:
        return []
    q_tokens = tokens(q) or query.split()
    results: list[dict[str, Any]] = []

    def add(kind: str, e_id: str, title: str, subtitle: str | None, score: int, url: str):
        if score:
            results.append({"type": kind, "id": e_id, "title": title, "subtitle": subtitle, "score": score, "url": url})

    for a in repos.activities.all():
        add("activity", a.id, a.title, a.technical_status or a.status,
            _score(query, q_tokens, [a.title, a.description, a.type, a.technical_status, a.waiting_for, *a.aliases],
                   [a.title, *a.aliases]), f"/activities/{a.id}")
    for p in repos.pull_requests.all():
        add("pull_request", p.id, f"PR {p.pull_request_number} · {p.title}", p.jira_ref,
            _score(query, q_tokens, [p.pull_request_number, p.title, p.jira_ref, p.repository, p.branch, p.project],
                   [p.pull_request_number, p.jira_ref]), f"/prs/{p.id}")
    for p in repos.people.all():
        add("person", p.id, p.name, p.role,
            _score(query, q_tokens, [p.name, p.role, p.team, *p.specialties, *p.aliases], [p.name, *p.aliases]),
            f"/people/{p.id}")
    for p in repos.projects.all():
        add("project", p.id, p.name, " · ".join(x for x in [p.jira_id, p.quarter, p.kind] if x),
            _score(query, q_tokens, [p.name, p.jira_id, p.quarter, p.scrum, p.description, *p.aliases],
                   [p.name, p.jira_id, *p.aliases]), f"/projects/{p.id}")
    for i in repos.initiatives.all():
        add("initiative", i.id, i.name, i.phase or i.status,
            _score(query, q_tokens, [i.name, i.description, i.objective, *i.aliases], [i.name, *i.aliases]),
            f"/initiatives/{i.id}")
    for b in repos.blockers.all():
        a = repos.activities.get(b.activity_id)
        add("blocker", b.id, f"Bloqueo {b.type}: {b.description[:60]}", a.title if a else None,
            _score(query, q_tokens, [b.description, b.type, b.responsible, b.waiting_for], []),
            f"/activities/{b.activity_id}?tab=blockers")

    results.sort(key=lambda r: -r["score"])
    return results[:limit]
