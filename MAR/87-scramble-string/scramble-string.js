/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {

    const memo = new Map();

    function dfs(a, b) {
        if (a === b) {
            return true;
        }
        const key = a + "," + b;

        if (memo.has(key)) {
            return memo.get(key);
        }
        if (a.length !== b.length) {
            return false;
        }
        const count = {};

        for (let char of a) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of b) {
            if (!count[char]) {
                memo.set(key, false);
                return false;
            }

            count[char]--;
        }
        for (let i = 1; i < a.length; i++) {
            if (
                dfs(a.substring(0, i), b.substring(0, i)) &&
                dfs(a.substring(i), b.substring(i))
            ) {
                memo.set(key, true);
                return true;
            }
            if (
                dfs(a.substring(0, i), b.substring(b.length - i)) &&
                dfs(a.substring(i), b.substring(0, b.length - i))
            ) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return dfs(s1, s2);
};