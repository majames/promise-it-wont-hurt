// errors can be caught at any stage of the promise chain

var Q = require('q');

var parsePromised = function() {
  var deferred = Q.defer();
  var jsonData;

  try {
    jsonData = JSON.parse(process.argv[2]);
  } catch (err) {
    deferred.reject(err);
  }

  deferred.resolve(jsonData);
  return deferred.promise;
};

parsePromised().then(parsePromised).then(null, console.log);
