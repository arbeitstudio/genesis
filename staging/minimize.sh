#!/usr/bin/env bash
#     Anticverse Webraider © 2023
#     The Genesis Framework
#     https://github.com/anticverse/genesis.git (anticverse/genesis)
#     Maintainer: Ferit Yiğit BALABAN <balaban.ferityigit@anticverse.com>
#
#     genesis/staging/minimize.sh

for file in ../scripts/*.js; do
  base_name=$(basename "$file" .js)
  echo "$file"
  echo "$base_name"
  uglifyjs "$file" --compress --mangle --output "../js/$base_name.js"
done