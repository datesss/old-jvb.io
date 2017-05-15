var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  plugins: [
    new HtmlWebpackPlugin({template:'src/assets/index.html'}),
    new ExtractTextPlugin('dist/styles/main.css')
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
        ]
    },
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: true,
                        importLoaders: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        })
    }]
  },
};
