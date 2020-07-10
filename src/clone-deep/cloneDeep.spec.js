import cloneDeep from './cloneDeep';

describe('clone deep', () => {
	it('测试拷贝功能', function () {
		const source = { a: 1, b: 1, c: 1 };
		const target = cloneDeep(source);
		expect(target).toEqual({ a: 1, b: 1, c: 1 });
	});
	it('测试深度拷贝功能', function () {
		const source = {
			a: 1,
			b: {
				c: {
					d: 1
				}
			}
		};
		const target = cloneDeep(source);
		target.b.c.d = 2;
		expect(source).toEqual({
			a: 1,
			b: {
				c: {
					d: 1
				}
			}
		});
		expect(target).toEqual({
			a: 1,
			b: {
				c: {
					d: 2
				}
			}
		});
	});
	it('测试深度拷贝功能-数组', function () {
		const source = [1, 2, 3];
		const target = cloneDeep(source);
		target[0] = 3;
		expect(source).toEqual([1, 2, 3]);
		expect(target).toEqual([3, 2, 3]);
	});
});
