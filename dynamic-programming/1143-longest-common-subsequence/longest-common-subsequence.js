// 1 <= s1.length, s2.length <= 1000
// s1 and s2 consist of only lowercase English characters.

const longestCommonSubsequence = (s1, s2) => {
  const iter = (i, j) => {
    if (i === 0 || j === 0) return 0;
    if (s1[i-1] === s2[j-1]) return dp(i - 1, j - 1) + 1;
    return Math.max(dp(i - 1, j), dp(i, j - 1));
  };

  const dp = memoize(array(s1.length + 1, s2.length + 1), iter);

  return dp(s1.length, s2.length);
};

const memoize = (m, f) => (i, j) => m.get(i, j) ?? m.set(i, j, f(i, j));
const array = (n1, n2) => {
  const m = Array(n1 * n2);
  return { get: (i, j) => m[i * n2 + j], set: (i, j, y) => (m[i * n2 + j] = y, y) };
};

const { assert } = require('../../utils/assert');

assert(3, longestCommonSubsequence('abcde', 'ace'));
assert(3, longestCommonSubsequence('abc', 'abc'));
assert(0, longestCommonSubsequence('abc', 'def'));


assert(210,
  longestCommonSubsequence(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  )
);

assert(2, longestCommonSubsequence('ezupkr', 'ubmrapg'));

assert(6, longestCommonSubsequence('yzebsbuxmtcfmtodclszgh', 'ejevmhcvshclydqrulwbyha'));
