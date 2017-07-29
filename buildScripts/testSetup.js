// This file isn't transpiled, so must use CommonJS and ES5

// Register bable to transpile before our tests run
require('babel-register')();

// Disble Webpack festures that Mocha dosen't understand
require.extensions['.css'] = function() {}


