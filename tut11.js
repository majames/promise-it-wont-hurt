// multiple dependent ajax requests using promises

var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
  .then(function(id) {
    return qhttp.read('http://localhost:7001/' + id.toString())
  })
  .then(function(data) {
    console.log(JSON.parse(data.toString()));
  })
  .then(null, console.error)
  .done();
