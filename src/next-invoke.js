(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.invoke = function(inContext, inMethod, inArgs) {
    var method;
    if (inContext && (method = inContext[inMethod])) {
      return method.apply(inContext, inArgs);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.invoke;
  }
})();
