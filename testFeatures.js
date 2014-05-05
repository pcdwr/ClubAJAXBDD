var exec = require('child_process').exec,
    child;

child = exec('node_modules/.bin/cucumber.js tests/features -f pretty',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
