import nx from '@jswork/next';

nx.invoke = function (inContext, inPath, ...inArgs) {
  var method = nx.get(inContext, inPath);
  if (inContext && typeof method === 'function') return method.apply(inContext, inArgs);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.invoke;
}

export default nx.invoke;
