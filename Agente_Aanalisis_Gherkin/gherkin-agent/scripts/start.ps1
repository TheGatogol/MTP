# Abre backend y frontend en dos ventanas y luego el navegador.
$here = $PSScriptRoot
Start-Process powershell -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-File', "$here\start-backend.ps1"
Start-Process powershell -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-File', "$here\start-frontend.ps1"
Start-Sleep -Seconds 4
Start-Process 'http://127.0.0.1:5174'
