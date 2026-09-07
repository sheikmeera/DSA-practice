/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];

    function backtrack(start, arr) {
        if (arr.length === k) {
            result.push([...arr]);
            return;
        }

        for (let i = start; i <= n; i++) {
            arr.push(i);

            backtrack(i + 1, arr);

            arr.pop();
        }
    }

    backtrack(1, []);

    return result;
};