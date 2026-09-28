# Instala dependencias del backend y del frontend y crea los .env a partir de los ejemplos.
# Uso (desde la raíz del proyecto):  .\scripts\setup.ps1
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

Write-Host "== Backend ==" -ForegroundColor Cyan
Push-Location "$root\backend"
if (-not (Test-Path ".venv")) { python -m venv .venv }
.\.venv\Scripts\python.exe -m pip install --upgrade pip | Out-Null
.\.venv\Scripts\pip.exe install -r requirements.txt
if (-not (Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "Creado backend\.env -> edita FIREBASE_PROJECT_ID y GOOGLE_APPLICATION_CREDENTIALS" -ForegroundColor Yellow
}
Pop-Location

Write-Host "== Frontend ==" -ForegroundColor Cyan
Push-Location "$root\frontend"
npm install
if (-not (Test-Path ".env")) { Copy-Item ".env.example" ".env" }
Pop-Location

Write-Host "Listo. Siguiente paso: .\scripts\seed.ps1 y luego .\scripts\start.ps1" -ForegroundColor Green
