# Carga los datos iniciales en Firestore.
#   .\scripts\seed.ps1          -> solo si la base está vacía
#   .\scripts\seed.ps1 -Reset   -> BORRA todo (incluido historial) y recarga
# Si el backend está corriendo, reinícialo después (mantiene una caché en memoria).
param([switch]$Reset)
$root = Split-Path -Parent $PSScriptRoot
Push-Location "$root\backend"
if ($Reset) { .\.venv\Scripts\python.exe -m app.seed --reset } else { .\.venv\Scripts\python.exe -m app.seed }
Pop-Location
