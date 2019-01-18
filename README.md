# next-invoke
> Invoke a method with context

## install:
```bash
npm install -S afeiship/next-invoke --registry=https://registry.npm.taobao.org
```

## usage:
```js
var obj1 = {
  name: 'obj1',
  fn1: function(arg1, arg2) {
    console.log('args:', arg1, arg2);
    return this.name + '_FEI';
  }
};

var rs = nx.invoke(obj1, 'fn1', ['arg1', 'arg2']);

// obj1_FEI
// args: arg1 arg2
```
