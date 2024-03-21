module.exports = {
    rootDir: '..',
    collectCoverage: true,
    globals: {
        __DEV__: true,
    },
    testURL: 'http://test.com',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
    testMatch: ['<rootDir>/src/**/*.(test|spec).(js|ts|tsx)'],
    collectCoverageFrom: ['src/**/*.(js|ts|tsx)'],
    // Ignore npm caching to avoid problems with jest and chalk throwing errors
    // when running in grand central. Fix grabbed from this github issue:
    // https://github.com/facebook/jest/issues/4682#issuecomment-352899677
    modulePathIgnorePatterns: ['npm-cache', '.npm'],
    moduleNameMapper: {
        '\\.(scss|css)$': '<rootDir>/jest/style-mock.js',
        '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'identity-obj-proxy',
    },
};
