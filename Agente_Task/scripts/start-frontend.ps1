# Frontend Vite (desarrollo).
$root = Split-Path -Parent $PSScriptRoot
Set-Location "$root\frontend"
$Host.UI.RawUI.WindowTitle = "QA Task Agent - frontend"
npm run dev
