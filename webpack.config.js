var path = require('path');
var webpack = require('webpack');

module.exports = {
    watch: false,
    debug: true,
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './app/js/main'
    ],
    output: {
        publicPath: '/',
        filename: './dist/bundle.js'
    },
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
    resolve: {
        root:  path.resolve(__dirname, '..'),
        extensions: ['', '.js'],
        modulesDirectories: ["node_modules"]
    }
};

