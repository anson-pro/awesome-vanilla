Function.prototype.bind2 = function (boundThis, ...args) {
  let fn = this;

  let resultFn = function (...args2) {
    return fn.call(this instanceof resultFn ? this : boundThis, ...args, ...args2);
  };

  resultFn.prototype = fn.prototype;

  return resultFn;
};
