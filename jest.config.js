module.exports = {
    verbose: true,
    displayName: 'jest-unit-test-generator',
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: '../../../coverage/',
    transform: {
        '^.+\\.(ts|html)$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    }
};
