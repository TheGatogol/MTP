# Instala backend (venv + pip) y frontend (npm) y crea los .env a partir de los ejemplos.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot

Write-Host '== Backend ==' -ForegroundColor Cyan
Set-Location "$root\backend"
if (-not (Test-Path '.venv')) { python -m venv .venv }
.\.venv\Scripts\python -m pip install --upgrade pip | Out-Null
.\.venv\Scripts\pip install -r requirements.txt
if (-not (Test-Path '.env')) { Copy-Item '.env.example' '.env' }

Write-Host '== Frontend ==' -ForegroundColor Cyan
Set-Location "$root\frontend"
npm install --no-audit --no-fund
if (-not (Test-Path '.env')) { Copy-Item '.env.example' '.env' }

Write-Host '== Ollama ==' -ForegroundColor Cyan
try {
    $models = (Invoke-RestMethod -Uri 'http://127.0.0.1:11434/api/tags' -TimeoutSec 3).models.name
    if ($models -notcontains 'qwen3:14b') { Write-Host 'Descarga el modelo: ollama pull qwen3:14b' -ForegroundColor Yellow }
    else { Write-Host 'qwen3:14b disponible' -ForegroundColor Green }
} catch {
    Write-Host 'Ollama no responde. Ábrelo o ejecuta "ollama serve" (la app funciona sin IA, solo con reglas).' -ForegroundColor Yellow
}

Set-Location $root
Write-Host 'Listo. Ejecuta .\scripts\start.ps1' -ForegroundColor Green
