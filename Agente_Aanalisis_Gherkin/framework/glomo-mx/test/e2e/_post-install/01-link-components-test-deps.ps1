$APP_NODE_MODULES="..\..\node_modules"
$E2E_NODE_MODULES=".\node_modules"

New-Item -ItemType Directory -Force -Path "$APP_NODE_MODULES" | Out-Null

function Create-Link() {
    param (
        $NAME
    )

    #Write-Host "Creating symbolic link for $NAME";

    if (-not(Test-Path -Path "$APP_NODE_MODULES/$NAME")) {
        New-Item -ItemType SymbolicLink -Path "$APP_NODE_MODULES\$NAME" -Target "$E2E_NODE_MODULES\$NAME" | Out-Null
    }
}

#Create-Link "@testing"
