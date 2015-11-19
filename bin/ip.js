#!/usr/bin/env node

'use strict';

var ip = require('../lib/ip.js');

function main() {
  console.log(ip.address());
}

main();
