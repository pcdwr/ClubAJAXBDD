var zombie = require('zombie');
var should = require('should');

module.exports.World = function World(callback) {
  this.browser = new zombie(); // this.browser will be available in step definitions
  this.browser.silent = true;

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
