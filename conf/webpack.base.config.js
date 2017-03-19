const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = require('./conf');

module.exports = new WebpackConfig().merge({
  entry: {
    app:   [
      `./${conf.path.src('index')}`
    ],
    vendor: [
      'angular'
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
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader', // in case the ExtractTextPlugin is disabled, inject CSS to <HEAD>
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader' // compiles SASS to CSS
          }]
        })
      },
      {
        test: /.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ng-annotate-loader' // handle AngularJS dependency injection
        }, {
          loader: 'babel-loader', // transpile to ES5
          options: {
            presets: ['es2015']
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ // inject ES5 modules as global vars
    }),
    new HtmlWebpackPlugin({ // inject styles and js to index.html
      template: conf.path.src('index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({ // seperate vendor chunks
      name: ['vendor', 'manifest']
    }),
  ],
});