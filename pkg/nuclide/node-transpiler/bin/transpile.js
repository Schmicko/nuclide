#!/usr/bin/env node
'use strict';
/* @noflow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/*eslint-disable no-var, prefer-const, no-console*/

/**
 * This is a command-line utility to transpile a .js file in the same way that
 * Atom would.
 */

if (process.argv.length !== 3) {
  console.error('No file specified. Usage: <file>');
  process.exit(1);
}

var file = process.argv[2];
var path = require('path');

var filePath = path.resolve(process.env.PWD, file);

var fs = require('fs');
var sourceCode = fs.readFileSync(filePath);
var transpileFile = require('../lib/babel-cache').transpileFile;
var code = transpileFile(sourceCode, filePath);
console.log(code);
