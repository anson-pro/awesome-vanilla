import bind from './bind';

describe('bind', () => {
  it('bind2 是一个函数', () => {
    const fn = () => {
    };

    expect(typeof fn.bind2 === 'function').toBe(true);
  });

  it('bind2 返回一个函数', () => {
    const fn = () => {
    };
    const fn2 = fn.bind2();

    expect(typeof fn2 === 'function').toBe(true);
  });

  it('bind2 返回的函数 this 指向 bind 的第一个参数', () => {
    const obj = {
      name: 'name'
    };
    const fn = function () {
      return this.name;
    };
    const fn2 = fn.bind2(obj);

    expect(fn2()).toBe('name');
  });

  it('bind2 除第一个参数外其他参数作为新函数的参数，供调用时使用', () => {
    const obj = {
      name: 'name'
    };

    const fn = function (age) {
      return {
        name: this.name,
        age
      };
    };
    const fn2 = fn.bind2(obj, 18);

    expect(fn2().age).toBe(18);
  });

  it('bind2 返回的函数，可以继续传参', () => {
    const obj = {};
    const fn = function (age, code) {
      return {
        age,
        code
      };
    };
    const fn2 = fn.bind2(obj, 18);

    expect(fn2(100).code).toBe(100);
  });

  it('bind2 返回的函数，支持 new 关键字，并忽略第一个参数的 this', () => {
    const obj = {
      name: 'anson'
    };

    const fn = function () {
      return {
        name: this.name
      };
    };

    const fn2 = fn.bind2(obj);
    const ins = new fn2();
    expect(ins.name).toBeFalsy();
  });
});
