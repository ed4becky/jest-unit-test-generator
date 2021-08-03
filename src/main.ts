import {readFileSync, writeFileSync, readdirSync, existsSync} from 'fs';
import * as ts from 'typescript';
import { parseSourceFile } from './parse-source-file';
import { generateUnitTest } from './generate-unit-test';
import defaultDependencyHandler from './default-dependency-handler';
import { DependencyHandler } from './model';

export function run(argv: any) {
  if (!argv._) {
    // tslint:disable-next-line:no-console
    console.error('missing path argument');
    process.exit(1);
  }

  if (argv.require) {
    require(argv.require);
  }

  const handlers: DependencyHandler[] = [];
  if (argv.handlers) {
    const files = readdirSync(argv.handlers);
    files.forEach((file) => {
      const value = require(process.cwd() + '/' + argv.handlers + '/' + file);
      handlers.push(value.default || value);
    });
  }
  handlers.push(defaultDependencyHandler);

  const path = argv._[0];

  const specPath = path.substring(0, path.length - 2) + 'spec.ts';
  if(!argv.overwrite && existsSync(specPath)) {
    throw `${specPath} already exists`;
  }
  const sourceCode = readFileSync(path).toString();

  const sourceFile = ts.createSourceFile(
    path,
    sourceCode,
    ts.ScriptTarget.Latest,
        /*setParentNodes */ true
  );

  const input = parseSourceFile(sourceFile);
  const output = generateUnitTest(path, sourceCode, input, handlers, argv.nodom);

  writeFileSync(specPath, output);
}
