// Promises must be resolved on the same turn of the event loop they were created on
// Therefore functions passed to the then method of a promise will not fire until the next turn of the event loop
var Q = require('q');
var deferred = Q.defer();

deferred.promise.then(console.log);
deferred.resolve('SECOND');
console.log('FIRST');