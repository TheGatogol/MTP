# Backend FastAPI con recarga automática.
$root = Split-Path -Parent $PSScriptRoot
Set-Location "$root\backend"
$Host.UI.RawUI.WindowTitle = "QA Task Agent - backend"
.\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
