module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'always', 'sentence-case'],
    },
    ignores: [(commit) => commit.includes('[skip ci]')],
};
