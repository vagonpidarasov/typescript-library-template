module.exports = function withPresetEnvModules(config, modules) {
    return {
        ...config,
        presets: config.presets.map((preset) => {
            if (Array.isArray(preset) && preset[0] === '@babel/preset-env') {
                return [
                    preset[0],
                    {
                        ...preset[1],
                        modules,
                    },
                ];
            } else {
                return preset;
            }
        }),
    };
};
