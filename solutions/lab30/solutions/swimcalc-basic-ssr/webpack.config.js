const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry  : './src/scripts/app.js',
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'index.js',
        publicPath: '/build/'
    },
    module : {
        loaders: [ {
            test   : /.js$/,
            loader : 'babel-loader',
            query: {
                presets: ['es2015','react','stage-2']
            }
        }
        ]
    }

};
