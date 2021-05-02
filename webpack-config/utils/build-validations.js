const chalk = require('chalk');
const ERR_NO_ENV_FLAG = chalk.red(
    `You must pass an --env flag into webpack-cli 
    e.g. --env mode=prod or including with --env addons=bundleanalyzer 
    to specify webpack config's mode or add other plugins (addons) to the config file`,
);

module.exports = {
    ERR_NO_ENV_FLAG,
};
