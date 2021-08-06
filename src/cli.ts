#!/usr/bin/env node
import { run } from './main';
import yargs = require("yargs");
import { hideBin } from 'yargs/helpers'
const fs = require("fs");
const path = require("path");

const argv: any = yargs(hideBin(process.argv))
    .option({
        require: {type: 'string', description: 'optional package to require to support custom handlers'},
        handlers: {type: 'string', description: 'directory of optional handlers to be included'},
        overwrite: {type: 'boolean', description: 'overwrite existing spec file'},
        all: {type: 'boolean', description: 'recursively generate unit test specs for all testable files'},
        nodom: {type: 'boolean', description: 'test component as provider instead of as declared component'}
    })
    .help()
    .argv;

if (!argv._ || argv._.length === 0) {
    // tslint:disable-next-line:no-console
    console.error('missing path argument');
    process.exit(1);
}
const files: string[] = [];
const getFilesRecursively = (directory: string) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()
            && absolute.indexOf('node_modules') < 0) {
            getFilesRecursively(absolute);
        } else if (
            absolute.endsWith('component.ts')
            || absolute.endsWith('service.ts')
            || absolute.endsWith('pipe.ts')
            || absolute.endsWith('directive.ts')
        ) {
            //console.log(absolute)
            files.push(absolute);
        }
    }
    return files;
};

if((argv as any).all) {
    const paths = getFilesRecursively(argv._[0]);
    console.log(`processsing ${paths.length} files`)

    paths.forEach(name => {
        run({...argv, '_': [name]});
    });
} else {
    run(argv);
}


