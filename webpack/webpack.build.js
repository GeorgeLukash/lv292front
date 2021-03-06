var loaders = require("./loaders");
var preloaders = require("./preloaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            warning: false,
            mangle: true,
            comments: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: '../dist/assets'
        }, ])
    ],
    module: {
        preLoaders: preloaders,
        loaders: loaders
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    }
};