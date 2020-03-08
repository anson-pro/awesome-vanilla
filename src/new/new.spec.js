import vanillaNew from './new';

describe('实现 new 关键字', () => {
  it('默认 return 的构造函数', () => {
    function Person(name) {
      this.name = name;
    }

    const person = vanillaNew(Person, 'name');

    expect(person instanceof Person).toBe(true);
  });

  it('return null', () => {
    function Person(name) {
      this.name = name;
      return null;
    }

    const person = vanillaNew(Person, 'name');

    expect(person).toBeTruthy();
  });

  it('return 基本类型', () => {
    function Person(name) {
      this.name = name;
      return 'name';
    }

    const person = vanillaNew(Person, 'name');

    expect(person).toBe(person);
  });
});
