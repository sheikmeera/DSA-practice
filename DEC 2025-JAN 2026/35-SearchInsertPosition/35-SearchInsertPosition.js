// Last updated: 16/02/2026, 16:15:02
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<target){
            k++;
        }
        else if(nums[i]>target){ 
             break;
        }
        else{
            break;
        }
    }
    return k
};