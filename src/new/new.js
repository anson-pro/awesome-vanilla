function vanillaNew() {
  let obj = new Object();
  let Constructor = [].shift.call(arguments);

  let Fn = function () {
  };
  Fn.prototype = Constructor.prototype;
  obj = new Fn();

  let result = Constructor.apply(obj, arguments);

  return (typeof result === 'object' || typeof result === 'function') ? result || obj : obj;
}

export default vanillaNew;
