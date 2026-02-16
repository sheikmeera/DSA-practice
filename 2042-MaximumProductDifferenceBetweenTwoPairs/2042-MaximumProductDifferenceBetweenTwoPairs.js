// Last updated: 16/02/2026, 16:14:23
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let l=nums.length;
    nums.sort((a,b)=>a-b);
    let min=nums[0]*nums[1];
    let max=nums[l-1]*nums[l-2];
    return max-min
};