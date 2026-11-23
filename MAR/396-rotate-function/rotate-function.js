/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;

    let sum = 0;
    let current = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        current += i * nums[i];
    }

    let max = current;

    for (let k = 1; k < n; k++) {
        current = current + sum - n * nums[n - k];

        max = Math.max(max, current);
    }

    return max;
};