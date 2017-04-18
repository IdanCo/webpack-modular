const webpack = require('webpack');
// webpack configuration object
const webpackConfig = require('./webpack.config.js');
// webpack development server
const WebpackDevServer = require('webpack-dev-server');

// Set the event based on the npm script that is running (start, build, test, etc.)
const npmEvent = process.env.npm_lifecycle_event;

// decide which method to run based on the event
switch (npmEvent) {
  case 'serve':
    startDevelopmentServer();
    break;
  default:
    console.info('tasks.js must run via "npm run ...". you tired running it directly, or ');
    break;
}

// method to create and run development server
function startDevelopmentServer() {
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    hot: true,
    stats: 'minimal'
  });

  server.listen('8080', 'localhost', () => console.log(`WebpackDevServer running on port 8080`));
}
