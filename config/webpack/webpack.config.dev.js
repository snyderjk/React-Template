var webpack = require("webpack");
var path = require("path");

var APP_PATH = '../../src';
var DIST_PATH = '../../dist';

var config = {
    devtool: '#inline-source-map',
    entry: [
        'babel-polyfill',
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, APP_PATH, 'index.tsx'),
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, DIST_PATH),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, APP_PATH)
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)?$/,
                include: [path.join(__dirname, APP_PATH)],
                use: ['babel-loader', 'ts-loader']
            }
        ]
    }
};

module.exports = config;