var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './app/js/main'
    ],
    output: {
        publicPath: '/',
        filename: './dist/bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'app/index.html'
        }
    },
    debug: true
};

