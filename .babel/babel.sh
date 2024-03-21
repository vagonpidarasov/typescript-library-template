#!/bin/bash

BABEL_CONFIG=$1
OUT_DIR=$2
shift
shift
REST_ARGS=$@

babel \
  --no-babelrc \
  --config-file $BABEL_CONFIG \
  --extensions ".js,.ts,.tsx" \
  --ignore "src/**/*.spec.js" \
  --ignore "src/**/*.spec.ts" \
  --ignore "src/**/*.spec.tsx" \
  --out-dir $OUT_DIR \
  ./src \
  $REST_ARGS

