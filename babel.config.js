module.exports = function (api) {
    const presets = [['@babel/preset-env', { modules: false }], '@babel/preset-react', '@babel/preset-typescript'];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'react-hot-loader/babel',
        '@babel/plugin-syntax-jsx',
    ];

    /** this is just for minimal working purposes,
     * for testing larger applications it is
     * advisable to cache the transpiled modules in
     * node_modules/.bin/.cache/@babel/register* */
    api.cache(false);

    return {
        presets,
        plugins,
    };
};
