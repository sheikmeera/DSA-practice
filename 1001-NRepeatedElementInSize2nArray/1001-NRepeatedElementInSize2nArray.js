// Last updated: 16/02/2026, 16:14:31
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            return nums[i]
        }
        else{
            map.set(nums[i],1)
        }
    }
};