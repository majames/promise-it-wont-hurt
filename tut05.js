// Values returned by the promise handlers will be wrapped in a promise to allow chaining of methods

var Q = require('q');
var deferred = Q.defer();

var attachTitle = function(str) {
  return 'DR. ' + str;
};

deferred.promise.then(attachTitle).then(console.log);
deferred.resolve('MANHATTAN');