const conf = require('./conf');
const webpackConfig = require('../webpack.config');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'mocha',
      'chai'
    ],
    files: [
      conf.path.tests('index.spec.js')
    ],
    preprocessors: {
      [conf.path.tests('index.spec.js')]: [
        'webpack'
      ]
    },
    reporters: ['mocha'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false,
      },
    }
  };

  config.set(configuration);
};
