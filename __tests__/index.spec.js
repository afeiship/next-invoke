require('../src');

jest.setTimeout(60 * 1000);

describe('api.basic test', () => {
  test('obj call method', function () {
    const obj1 = {
      name: 'obj1',
      fn1: function (arg1, arg2) {
        return this.name + '_FEI';
      }
    };

    const rs = nx.invoke(obj1, 'fn1', ['arg1', 'arg2']);
    const udf = nx.invoke(nx.GLOBAL, 'fnx', [1, 2, 3]);
    expect(rs).toBe('obj1_FEI');
    expect(udf).toBe(undefined);
  });

  test('deep path method call', function () {
    const obj = {
      name: 'obj',
      info: {
        fn1: function (arg1, arg2) {
          return this.name + '_FEI';
        }
      }
    };
    const res = nx.invoke(obj, 'info.fn1', ['arg1', 'arg2']);
    expect(res).toBe('obj_FEI');
  });

  test('invoke a fn directly', function () {
    const fn = function (arg1, arg2) {
      return arg1 + arg2;
    };

    const res = nx.invoke(null, fn, [1, 2]);
    expect(res).toBe(3);
  })
});
