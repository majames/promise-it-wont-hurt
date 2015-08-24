
var Q = require('q');

Q.fcall(function() {
  JSON.parse(process.argv[2]);
}).then(null, console.log);
