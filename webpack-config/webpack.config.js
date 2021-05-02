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

module.exports = () => {
    const { env, addons: addonsArg } = argv;

    if (!env) {
        throw new Error(buildValidations.ERR_NO_ENV_FLAG);
    }

    const envConfig = require(`./utils/webpack.${env}.js`);
    const mergedConfig = merge(commonConfig, envConfig, ...addons(addonsArg));

    return mergedConfig;
};