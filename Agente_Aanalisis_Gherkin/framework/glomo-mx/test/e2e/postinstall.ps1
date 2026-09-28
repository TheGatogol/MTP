Get-ChildItem ".\_post-install" -filter "*.ps1" | ForEach-Object {
    & $_.FullName
}
