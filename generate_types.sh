#!/usr/bin/env -S bash -xe

rm -fr packages/*/src
move-tsgen ../xcoin --out-dir packages/xcoin/src
