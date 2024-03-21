const baseConfig = require('../.babelrc.json');
const withPresetEnvModules = require('./withPresetEnvModules');

module.exports = withPresetEnvModules(baseConfig, 'cjs');
