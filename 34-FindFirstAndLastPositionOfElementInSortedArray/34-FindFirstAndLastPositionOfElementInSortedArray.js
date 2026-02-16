// Last updated: 16/02/2026, 16:15:03
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first=-1,last=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target&&first==-1){
            first=i;
            last=i
        }
        else if(nums[i]==target){
            last=i
        }
    }
    return [first,last]
};