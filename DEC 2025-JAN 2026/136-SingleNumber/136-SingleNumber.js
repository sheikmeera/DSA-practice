// Last updated: 16/02/2026, 16:14:45
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res=0
    for(let i=0;i<nums.length;i++){
        res ^= nums[i]
    }
    return res
};