#!/usr/bin/env bash
SOURCE="${BASH_SOURCE[0]}";
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )";

LOCAL_GIT_REPO_PATH="${DIR}/.git";
GIT_HOOKS_DIRECTORY="${LOCAL_GIT_REPO_PATH}/hooks"
HOOKS_SCRIPTS_DIRECTORY="${DIR}/_git_hooks";
HOOKS_SCRIPTS_DIRECTORY_E2E="${DIR}/test/e2e/_git_hooks";

# Hooks linking
if [[ ! -d ${LOCAL_GIT_REPO_PATH} ]]; then
    echo "[error] Unable to find .git folder.";
fi
mkdir -p "${GIT_HOOKS_DIRECTORY}";

if [[ -d ${HOOKS_SCRIPTS_DIRECTORY} ]]; then
  for file in ${HOOKS_SCRIPTS_DIRECTORY}/*; do
      if [[ -f ${file} ]]; then
          filename=$(basename "${file}");

          ln -sf "${HOOKS_SCRIPTS_DIRECTORY}/${filename}" "${GIT_HOOKS_DIRECTORY}/${filename}";
          # Make hook link executable
          chmod u+x "${GIT_HOOKS_DIRECTORY}/${filename}";

          # Make main files executable
          chmod u+x "${file}";
          [ -d "${HOOKS_SCRIPTS_DIRECTORY}/${filename}.d" ] && chmod u+x "${HOOKS_SCRIPTS_DIRECTORY}/${filename}.d/"*;

          # Make e2e files executable
          [ -f "${HOOKS_SCRIPTS_DIRECTORY_E2E}/${filename}" ] && chmod u+x "${HOOKS_SCRIPTS_DIRECTORY_E2E}/${filename}";
          [ -d "${HOOKS_SCRIPTS_DIRECTORY_E2E}/${filename}.d/" ] && chmod u+x "${HOOKS_SCRIPTS_DIRECTORY_E2E}/${filename}.d/"*;

          echo "Git hook linked: ${filename}"
      fi
  done
fi
