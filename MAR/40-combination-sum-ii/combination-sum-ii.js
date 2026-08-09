/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (sum + candidates[i] > target) {
                break;
            }

            current.push(candidates[i]);

          
            backtrack(i + 1, current, sum + candidates[i]);

            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};