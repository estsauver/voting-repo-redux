/**
 * Created by estsauver on 1/23/16.
 */
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
      loaders: [{
          test: /.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};