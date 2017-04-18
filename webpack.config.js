const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = require('./conf');

const config = {
  entry: {
    app:   [
      `./${conf.path.src('index')}`,
      `webpack-dev-server/client?http://localhost:${conf.servePort}/`,
      'webpack/hot/dev-server'
    ]
  },
  output: {
    path: conf.absolutePath(conf.paths.tmp),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true // toggle this flag to see the issue
          }
        },
        {
          loader: 'sass-loader', // compiles SASS to CSS
        }]
      },
      {
        test: /.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
          loader: 'babel-loader', // transpile to ES5
          options: {
            presets: ['es2015']
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable hot module replacement
    new webpack.NamedModulesPlugin(), // add names to modules
    new HtmlWebpackPlugin({ // inject styles and js to index.html
      template: conf.path.src('index.html')
    })
  ],
  devtool: 'inline-source-map'
};

module.exports = config;