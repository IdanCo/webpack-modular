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
      'angular',
      'jquery',
      'bootstrap'
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
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              sourceMap: true,
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader', // compiles SASS to CSS
            options: {
              sourceMap: true
            }
          }]
        })
      },
      // in case you plan on using raw css files, add this rule:
      // {
      //   test: /\.(css)$/,
      //   loaders: ExtractTextPlugin.extract({
      //     fallback: 'style-loader', // in case the ExtractTextPlugin is disabled, inject CSS to <HEAD>
      //     use: [{
      //       loader: 'css-loader', // translates CSS into CommonJS modules
      //       options: {
      //         sourceMap: true
      //       }
      //     }]
      //   })
      // },
      {
        test: /.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
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
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // in case bootstrap's modules were imported individually, they must also be provided here:
      // Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),
    new HtmlWebpackPlugin({ // inject styles and js to index.html
      template: conf.path.src('index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({ // seperate vendor chunks
      name: ['vendor', 'manifest']
    })
  ],
});