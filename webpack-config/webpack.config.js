const buildValidations = require('./utils/build-validations');
const commonConfig = require('./utils/webpack.common');
const argv = require('webpack-nano/argv');
const { merge } = require('webpack-merge');

const addons = (/* string | string[] */ addonsArg) => {
    let addons = Array.isArray(addonsArg)
        ? addonsArg.filter((item) => item !== true)
        : [addonsArg].filter(Boolean);

    return addons.map((addonName) =>
        require(`./utils/addons/webpack.${addonName}.js`)
    );
};

const turnEnvToObject = (/* string[] */args) => {
    const obj = {};

    Array(args).flat(1).forEach(arg => {
        const [name, val] = arg.split('=');
        if (name in obj) {
            obj[name] = [...obj[name], val]
        } else {
            obj[name] = [val];
        }
    });
    return obj;
}

module.exports = () => {
    const { env } = argv;
    if (!env) throw new Error(buildValidations.ERR_NO_ENV_FLAG);
    
    const envObj = turnEnvToObject(env);
    const { mode, addons: addonsArg } = envObj;

    const envConfig = require(`./utils/webpack.${mode[0]}.js`);
    const mergedConfig = merge(commonConfig, envConfig, ...addons(addonsArg));

    return mergedConfig;
};