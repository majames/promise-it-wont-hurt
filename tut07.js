// fcall is used to wrap function returns with a promise
var Q = require('q');

Q.fcall(function() {
  JSON.parse(process.argv[2]);
}).then(null, console.log).done();
