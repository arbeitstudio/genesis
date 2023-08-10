#!/usr/bin/env bash
#     Anticverse Webraider © 2023
#     The Genesis Framework
#     https://github.com/anticverse/genesis.git (anticverse/genesis)
#     Maintainer: Ferit Yiğit BALABAN <balaban.ferityigit@anticverse.com>
#
#     genesis/staging/copy_over.sh

echo "Copying JavaScript"
mkdir -p "../../assets/js"
cp -v ../js/*.js "../../assets/js/"

echo "Copying logos"
mkdir -p "../../assets/logos"
cp -v ../logos/*.svg "../../assets/logos/"