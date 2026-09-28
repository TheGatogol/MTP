from datetime import date, datetime, timezone
from zoneinfo import ZoneInfo

from app.config import get_settings

WEEKDAYS_ES = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]


def tz() -> ZoneInfo:
    return ZoneInfo(get_settings().app_timezone)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def local_now() -> datetime:
    return datetime.now(tz())


def today() -> date:
    return local_now().date()


def parse_date(value: str | None) -> date | None:
    """Accepts 'YYYY-MM-DD' or a full ISO datetime; returns the local calendar date."""
    if not value:
        return None
    try:
        if len(value) == 10:
            return date.fromisoformat(value)
        dt = datetime.fromisoformat(value.replace("Z", "+00:00"))
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(tz()).date()
    except ValueError:
        return None


def days_since(value: str | None) -> int | None:
    d = parse_date(value)
    return None if d is None else (today() - d).days


def days_until(value: str | None) -> int | None:
    d = parse_date(value)
    return None if d is None else (d - today()).days


def greeting() -> str:
    hour = local_now().hour
    if hour < 12:
        return "Buenos días"
    if hour < 19:
        return "Buenas tardes"
    return "Buenas noches"


def today_label() -> str:
    d = today()
    return f"{WEEKDAYS_ES[d.weekday()]} {d.isoformat()}"
