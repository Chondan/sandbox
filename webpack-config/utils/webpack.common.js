const commonPaths = require('./common-paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    output: {
        path: commonPaths.outputPath,
        publicPath: '/',
    },
    target: 'web',
    optimization: {
        splitChunks: {
        cacheGroups: {
            vendor: {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]semantic-ui-([\S]+)[\\/]/,
            name: 'vendor',
            enforce: true,
            },
        },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: `public/index.html`
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
};

module.exports = config;