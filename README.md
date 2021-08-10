# Jest unit test generator

[![Travis CI build](https://travis-ci.org/fdim/jest-unit-test-generator.svg)](https://travis-ci.org/fdim/jest-unit-test-generator)

Automates creation of initial unit test files taking dependencies into account. 

Based on FDIM's [jasmine-unit-test-generator](https://www.npmjs.com/package/jasmine-unit-test-generator)
and  vkotliar1's [angular-unit-test-generator](https://www.npmjs.com/package/angular-unit-test-generator)

A jest Mock is created for each dependency.

The TestBed is created using the mocks.

A placeholder test is created for each public method.

Uses single or double quotes based on the target class's implementation.

For dependency names ending in 'Data', 'Config', or 'Environment', an empty object is referenced as a provider.

For dependency names ending in 'Type', the 'Type' is removed from the provider name, and a defaul implmentation with that name is assumed to exist.

For example:
fakeConfigSvc = createSpyObj<**EvConfigServiceType**>(***EvConfigService***, []);

Supported types:

* component: [source](spec/fixtures/components/login-form.component.ts), [generated spec](spec/fixtures/components/login-form.component.spec.expected.ts), [generated spec with custom handler](spec/fixtures/components/login-form.component.spec.expected.with-handlers.ts)
* directive
* service: [source](spec/fixtures/auth.service.ts), [generated spec](spec/fixtures/auth.service.spec.expected.ts)
* service (double quote): [source](spec/fixtures/auth.service.with-double-quote.ts), [generated spec](spec/fixtures/auth.service.with-double-quote.spec.expected.ts)
* pipe
* class file (may not be useful depending on use case)

## Usage

### Installation

run `npm i jest-unit-test-generator`

### Options

**--version**    
Show version number                                         [boolean]

**--require**    
optional package to require                                 [string]

**--handlers**   
directory of optional handlers                              [string]

**--overwrite**  
overwrite existing spec file                                [boolean]

**--nodom**      
test component as provider instead of as declared component [boolean]

**--all**      
recusrsively att unit test spec for all components/services, etc... [boolean]

**--help**
Show help                                                   [boolean]

### Basic

run `jest-unit-test-generator <path-to-file>`

### With custom dependency handlers:

run `jest-unit-test-generator --handlers <path-to-handlers-dir> <path-to-file>`

### With dependency handlers written in typescript:

install `ts-node` 

run `jest-unit-test-generator --require ts-node/register --handlers <path-to-handlers-dir> <path-to-file>`

And note that if you install generator globally, ts-node must be installed globally as well. Otherwise both need to be installed locally in the project.

## Dependency handlers

You can extend formatting of resulting spec files for each dependency by making a dependency handler. See [default-dependency-handler.ts](./src/default-dependency-handler.ts) and [event-bus.service.handler.ts](./spec/fixtures/dependency-handlers/event-bus.service.handler.ts)

It is possible to add extra declarations, initializers and dependencies.

## Development

It's probably best to:

* add an input file in `spec/fixtures` folder, e.g. test.ts
* add expected output file, e.g. test.spec.expected.ts
* link them in integration.spec.ts

Alternavely, you can:

* run `npm link`
* run `npm run build:dev`
* run `jest-unit-test-generator <option>` in your project of choice

## Release

run `npm run build`

run `npm publish`
