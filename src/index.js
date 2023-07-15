import nx from '@jswork/next';

nx.invoke = function (inContext, inPath, ...inArgs) {
  var method = typeof inPath === 'function' ? inPath : nx.get(inContext, inPath);
  var args = Array.isArray(inArgs[0]) ? inArgs[0] : inArgs;
  if (typeof method === 'function') return method.apply(inContext, args);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.invoke;
}

export default nx.invoke;
