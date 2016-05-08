var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server', // If you want to disable auto reload, replace dev-server with only-dev-server
    path.join(__dirname, '/hmr-client.js'),
    path.join(__dirname, '/app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
