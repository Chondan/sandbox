const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const tsConfig = require(`${PROJECT_ROOT}/tsconfig.json`);

const getAliasPath = (/* Object */paths) => {
    const aliasPath = {};
    for (const prefix in paths) {
        const cleanPrefix = prefix.slice(0, prefix.length - 2);
        const _path = paths[prefix][0].slice(1, -1);
        const cleanPaths = _path.split('/').filter(Boolean);
        aliasPath[cleanPrefix] = path.join(PROJECT_ROOT, ...cleanPaths);
    }
    return aliasPath;
}

module.exports = {
    projectRoot: PROJECT_ROOT,
    outputPath: path.join(PROJECT_ROOT, 'dist'),
    appEntry: path.join(PROJECT_ROOT, 'src'),
    aliasPath: getAliasPath(tsConfig.compilerOptions.paths) 
};
