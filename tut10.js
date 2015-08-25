// using promises with ajax requests for json data over http

qhttp = require('q-io/http');
// console.log(qhttp)

qhttp.read('http://localhost:1337')
  .then(function(data) {
    console.log(JSON.parse(data));
  })
  .then(null, console.error)
  .done();