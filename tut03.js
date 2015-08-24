// Promises can only be resolved once!

var Q = require('q');
var deferred = Q.defer();

deferred.promise.then(console.log, console.log);
deferred.resolve('I FIRED');
deferred.reject('I DID NOT FIRE');