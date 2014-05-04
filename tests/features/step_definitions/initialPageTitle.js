module.exports = function() {

  this.Then(/^I should see a title of 'My Exercises'$/, function (callback) {
    // express the regexp above with the code you wish you had
    this.browser.document.title.should.equal('My Exercises');
    callback();
  });

}
