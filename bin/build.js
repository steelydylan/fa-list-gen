#! /usr/bin/env node
"use strict";

const builder = require('../src/index.js');

exports.builder = {
  d: {
    alias: 'dist',
    describe: 'set dist directory',
    default: '',
  }
}

exports.handler = function (argv) {
  builder({
    dist: argv.dist
  });
};