const path = require('path');
const config = require('./webpack.config.jit');

config.entry = './out-aot/src/main.aot.js';
config.output.path = path.resolve(__dirname, './dist-aot');

module.exports = config;
