module.exports = function() {

  this.Then(/^I should see a list of my exercises$/, function (callback) {
    var table = this.browser.document.getElementById("exercises");
    if (table === null) {
      callback.fail(new Error("Expected to find exercise table."));
    }
    var numberOfRows = table.rows.length;
    if (numberOfRows != 2 + 1) {
      callback.fail(new Error("Expected two exercises but found " + numberOfRows - 1));
    }
    callback();
  });

}
