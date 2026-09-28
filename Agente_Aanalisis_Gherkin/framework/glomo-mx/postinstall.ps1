$LOCAL_GIT_REPO_PATH = "$PSScriptRoot\.git";
$GIT_HOOKS_DIRECTORY = "$LOCAL_GIT_REPO_PATH\hooks"
$HOOKS_SCRIPTS_DIRECTORY = "$PSScriptRoot\_git_hooks";

# Hooks linking
if (-not(Test-Path -Path $LOCAL_GIT_REPO_PATH -PathType Container))
{
  Write-Host "[error] Unable to find .git folder.";
}
New-Item -ItemType Directory -Force -Path "$GIT_HOOKS_DIRECTORY" | Out-Null

$files = Get-ChildItem $HOOKS_SCRIPTS_DIRECTORY
foreach ($file in $files)
{
  if (Test-Path -Path $file.FullName -PathType Leaf)
  {
    New-Item -Path "$GIT_HOOKS_DIRECTORY\$file" -ItemType SymbolicLink -Force -Value $file.FullName | Out-Null

    Write-Host "Git hook linked: $file"
  }
}
