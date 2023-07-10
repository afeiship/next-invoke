# next-invoke
> Invoke a method with context.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-invoke
```

## usage
```js
import '@jswork/next-invoke';

const obj1 = {
  name: 'obj1',
  fn1: function(arg1, arg2) {
    console.log('args:', arg1, arg2);
    return this.name + '_FEI';
  }
};

const rs = nx.invoke(obj1, 'fn1', ['arg1', 'arg2']);

// obj1_FEI
// args: arg1 arg2
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-invoke/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-invoke
[version-url]: https://npmjs.org/package/@jswork/next-invoke

[license-image]: https://img.shields.io/npm/l/@jswork/next-invoke
[license-url]: https://github.com/afeiship/next-invoke/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-invoke
[size-url]: https://github.com/afeiship/next-invoke/blob/master/dist/next-invoke.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-invoke
[download-url]: https://www.npmjs.com/package/@jswork/next-invoke
