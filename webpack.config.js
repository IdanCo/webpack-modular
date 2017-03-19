// Load webpack-config module, a wrapper for a configuration object for webpack
const WebpackConfig = require('webpack-config').default;

// Set the event based on the npm script that is running (start, build, test, etc.)
const npmEvent = process.env.npm_lifecycle_event;

// create a configuration object based on the npm event
const config = new WebpackConfig().extend(`./conf/webpack.${npmEvent}.config.js`);

// export the specific config for current process
module.exports = config;
