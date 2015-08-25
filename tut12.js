// multiple, dependent ajax requests using promises and functional programming (ajax)

var qhttp = require('q-io/http');
var _ = require('lodash');

var buildDBPath = function(id) {
  return 'http://localhost:7001/' + id.toString();
};

qhttp.read('http://localhost:7000')
  .then(_.flow(buildDBPath, qhttp.read))
  .then(_.flow(JSON.parse, console.log))
  .then(null, console.error)
  .done();