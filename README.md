# Webpack Express dev-middleware boilerplate

## Features

* Support for multiple static files/folders
* Support for proxies
* Hot reload for CSS
* Automatic reload on JS change (can be disabled)
* Nodemon setup - automatic server restart after config change

## Things to set up

### package.json

* Add ``start`` script with ``nodemon`` configuration
  * ``-i <path>`` defines folders that will be ignored

### Express

* Set up ``webpackMiddleware`` and ``webpackHotMiddleware``
* Set up static folders & proxies
* Static files setup docs: [Serving static files in Express](http://expressjs.com/en/starter/static-files.html)
* Proxy setup docs: [express-http-proxy](https://www.npmjs.com/package/express-http-proxy)

### Webpack config

* Add ``'webpack/hot/dev-server'`` or ``'webpack/hot/only-dev-server'`` to entry point
* Add ``hmr-client.js`` to entry point
* Add ``webpack.HotModuleReplacementPlugin()`` to plugins

## Dependencies
* ``nodemon`` - if you want auto server restarts on config change
* ``express-http-proxy`` - if you're using proxies
* ``webpack-dev-middleware`` - basic webpack dev middleware functionality
* ``webpack-middleware-hmr`` - auto update functionality (both CSS and JS)

## Starting the dev server

* ``npm start`` if start script is configured
* ``node index`` otherwise
