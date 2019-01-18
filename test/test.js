var nx = require('next-js-core2');
require('../src/next-invoke');

test('nx.invoke', function() {
  var obj1 = {
    name: 'obj1',
    fn1: function(arg1, arg2) {
      console.log('args:', arg1, arg2);
      return this.name + '_FEI';
    }
  };

  var rs = nx.invoke(obj1, 'fn1', ['arg1', 'arg2']);
  var udf = nx.invoke(nx.GLOBAL, 'fnx', [1, 2, 3]);
  expect(rs).toBe('obj1_FEI');
  expect(udf).toBe(undefined);
});
