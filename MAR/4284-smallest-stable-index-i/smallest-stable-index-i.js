/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n = nums.length;
    let right = new Array(n);

    right[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.min(nums[i], right[i + 1]);
    }
    let left = 0;

    for (let i = 0; i < n; i++) {
        left = Math.max(left, nums[i]);

        if (left - right[i] <= k) {
            return i;
        }
    }

    return -1;
};