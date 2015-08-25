// all method allows promises to express a dependency of a promise on multiple other promises

var Q = require('q');

var all = function(promiseOne, promiseTwo) {
  var count = 0, combinedDeferred = Q.defer();
  var result = [];

  var inc = function(str) {
    count += 1;
    result.push(str);

    if (count === 2) {
      combinedDeferred.resolve(result);
    }
  };

  promiseOne.then(inc).then(null, combinedDeferred.reject).done();
  promiseTwo.then(inc).then(null, combinedDeferred.reject).done();

  return combinedDeferred.promise;
};

var deferredOne = Q.defer();
var deferredTwo = Q.defer();

// all(deferredOne.promise, deferredTwo.promise).then(console.log).done();
Q.all([deferredOne.promise, deferredTwo.promise]).then(console.log).done();
setTimeout(deferredOne.resolve, 200, 'PROMISES');
setTimeout(deferredTwo.resolve, 200, 'FTW');