// Last updated: 16/02/2026, 16:15:24
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let maps=new Map();
    for(let i=0;i<nums.length;i++){
        let complement=target-nums[i];
        if(maps.has(complement)){
            return [maps.get(complement),i];
        }
        maps.set(nums[i],i)
    }
};