const webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var WriteFilePlugin = require('write-file-webpack-plugin');

var path = require('path');

module.exports = {
  devServer: {
    publicPath: path.join(__dirname, 'build')
  },
  entry: {
    js: './src/scripts/index.js',
    //js: ['babel-polyfill', './src/scripts/index.js'],
    //sass: './src/sass/style.scss',
  },
  output: {
    filename: './scripts/scripts.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/',
  },

  module: {
    loaders: [
      // javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          // presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      }
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: "style-loader",
      //     loader: [
      //         { loader: 'css-loader', query: { modules: true, sourceMaps: true } },
      //         'sass-loader'
      //     ]
      //   }),
      // },
    ],
  },


  devtool: "source-map",
  plugins: [
    //new WriteFilePlugin(),
    new CopyWebpackPlugin([
           { from: 'src/index.html', to: './', flatten:true }
       ],  {debug: true}),
    // new ExtractTextPlugin({
    //      filename: 'css/style.css',
    //      allChunks: true
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      //  drop_console: true,
       drop_debugger: true,
      },
    }),
  ],
  resolve: {
    extensions: [ '.js','.scss'],
  },
};
