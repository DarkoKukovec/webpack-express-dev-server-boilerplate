var http = require('http');
var url = require('url');
var express = require('express');
var proxy = require('express-http-proxy');
var webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-middleware-hmr/server.js');
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');

// Port where the app will be available
// var port = process.ENV.PORT;
var port = 8000;

// Basic server setup
var app = new express();
var server = http.createServer(app);

// Set up webpack (used for both dev-middleware and middleware-hmr)
var compiler = webpack(webpackConfig);

// Define static folders
app.use(express.static('public'));
app.use(express.static('test'));

// Define proxies
app.use('/pokemon', proxy('http://pokeapi.co', {
  forwardPath: function(req, res) {
    return '/api/v2/pokemon' + url.parse(req.url).path; // url.parse(req.url).path; contains path after /pokemon in request
  }
}));

// Set up basic middleware functionality
app.use(webpackMiddleware(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    timings: true
  }
}));

// Start server
server.listen(port, function() { console.log('Dev server running on port ' + port); });

// Add HMR support
webpackHotMiddleware(server, compiler);
