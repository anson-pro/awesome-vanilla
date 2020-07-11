import cloneDeep from './cloneDeep';

describe('deep clone test', () => {
	it('clone', function () {
		const source = { a: 1, b: 1, c: 1 };
		const target = cloneDeep(source);
		expect(target).toEqual({ a: 1, b: 1, c: 1 });
	});
	it('deep clone object', function () {
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
	it('deep clone array', function () {
		const source = [1, 2, 3];
		const target = cloneDeep(source);
		target[0] = 3;
		expect(source).toEqual([1, 2, 3]);
		expect(target).toEqual([3, 2, 3]);
	});
});
