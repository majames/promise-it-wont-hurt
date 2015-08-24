var Q = require('q');

var deferred = Q.defer();

deferred.promise.then(null, function(err) {
  console.log(err.message);
});
setTimeout(deferred.reject, 300, new Error('REJECTED!'));