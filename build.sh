#!/usr/bin/env bash
#
#       Ferit Yiğit BALABAN,        <fyb@fybx.dev>
#       scaffolding-build           2024

#       wip scaffolding component

# Section - static variables
commands=("sass" "realpath" "uglifyjs" "dirname")

# Section - required functions
checkDependencies() {
    for cmd in "${commands[@]}"; do
        if ! command -v "$cmd" >/dev/null 2>&1; then
            echo "Error: $cmd command not found. Please install $cmd and try again."
            exit 1
        fi
    done
}

ensureLocation() {
    if [ "$SCRIPT_DIR" != "$CURRENT_DIR" ]; then
        echo "Warning: This script must be called from its original location."
        return 1
    fi
    return 0
}

# Section - pre-execution checks
checkDependencies

# Section - runtime variables
SCRIPT_DIR=$(realpath "$(dirname "$0")")
CURRENT_DIR=$(realpath "$(pwd)")

# Section - task requirement checks
if ! ensureLocation; then
    cd "$SCRIPT_DIR" || exit 1
fi

# Section - custom task definitions
task_minimize() {
    for file in ../scripts/*.js; do
        base_name=$(basename "$file" .js)
        uglifyjs "$file" --compress --mangle --output "../js/$base_name.js"
    done
}

task_compile_scss() {
    sass --no-source-map --style=compressed scss:css
}

# Section - task execution
if [ $# -eq 0 ]; then
    task_minimize
    task_compile_scss
fi 

# Section - continuous execution
if [ "$1" == "--continuous" ] || [ "$1" == "-c" ]; then
    echo "Continuous build mode under development."
fi
