#!/usr/bin/env node
import { run } from './main';
import yargs = require("yargs");
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
    .option({
        require: {type: 'string', description: 'optional package to require to support custom handlers'},
        handlers: {type: 'string', description: 'directory of optional handlers to be included'},
        overwrite: {type: 'boolean', description: 'overwrite existing spec file'},
        nodom: {type: 'boolean', description: 'test component as provider instead of as declared component'}
    })
    .help()
    .argv;

run(argv);

