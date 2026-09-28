#!/usr/bin/env bash
APP_NODE_MODULES=../../node_modules
E2E_RELATIVE_NODE_MODULES=../test/e2e/node_modules

mkdir -p "${APP_NODE_MODULES}"
function createLinks() {
    NAME=$1

    #echo "Creating symbolic link for ${NAME}";

    if [[ ! -e "${APP_NODE_MODULES}/${NAME}" ]]; then
        ln -s "${E2E_RELATIVE_NODE_MODULES}/${NAME}" "${APP_NODE_MODULES}"
    fi
}

#createLinks "@testing"
