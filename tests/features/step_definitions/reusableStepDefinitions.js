var reusableStepDefinitions = function () {

  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^I browse to the application$/, function(callback) {
    // Express the regexp above with the code you wish you had.
    // `this` is set to a new this.World instance.
    // i.e. you may use this.browser to execute the step:

    this.visit('http://localhost:8080', callback);

    // The callback is passed to visit() so that when the job's finished, the next step can
    // be executed by Cucumber.
  });

  this.When(/^I see the first page$/, function(callback) {
    // Express the regexp above with the code you wish you had. Call callback() at the end
    // of the step, or callback.pending() if the step is not yet implemented:

    // Nothing to do...here for readability
    callback.pending();
  });

}

module.exports = reusableStepDefinitions;
