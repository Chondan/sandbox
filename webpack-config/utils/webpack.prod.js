const commonPaths = require('./common-paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
    mode: 'production',
    entry: {
        app: [`${commonPaths.appEntry}/index.js`]
    },
    output: {
        filename: 'static/[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    {
                        // We configure 'MiniCssExtractPlugin'              
                        loader: MiniCssExtractPlugin.loader,
                    }, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'styles/styles.[hash].css'
        })
    ]
};
module.exports = config;