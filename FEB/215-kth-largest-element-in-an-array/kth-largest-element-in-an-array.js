/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let val=nums.sort((a,b)=>b-a)
    return val[k-1]
};