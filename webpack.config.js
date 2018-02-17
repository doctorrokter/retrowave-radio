'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: './dist/index.js',
        publicPath: '/'
    },

    target: 'web',

    stats: {
        colors: true,
        reasons: true,
        hash: true,
        version: true,
        timings: true,
        chunks: true,
        chunkModules: true,
        cached: true,
        cachedAssets: true
    },

    devServer: {
        port: 3000,
        hot: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.js$/, exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/, exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ]
};