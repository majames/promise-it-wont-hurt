// exceptions bubble similar to synchronous code

var Q = require('q');

var throwMyGod = function() {
  throw new Error('OH NOES');
};

var itterate = function(x) {
  x = x || 1;
  console.log(x);
  return x + 1;
};

var promiseItterate = Q.fcall(itterate);

promiseItterate
  .then(itterate)
  .then(itterate)
  .then(itterate)
  .then(itterate)
  .then(throwMyGod)
  .then(itterate)
  .then(itterate)
  .then(itterate)
  .then(itterate)
  .then(itterate)
  .then(null, console.log)
  .done();
