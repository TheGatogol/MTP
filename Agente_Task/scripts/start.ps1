# Levanta backend (http://127.0.0.1:8000) y frontend (http://127.0.0.1:5173) en dos ventanas.
# Uso:  .\scripts\start.ps1
$root = Split-Path -Parent $PSScriptRoot

Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", "$root\scripts\start-backend.ps1"
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", "$root\scripts\start-frontend.ps1"

Write-Host "Backend:  http://127.0.0.1:8000/docs"
Write-Host "Frontend: http://127.0.0.1:5173"
Start-Sleep -Seconds 4
Start-Process "http://127.0.0.1:5173"
