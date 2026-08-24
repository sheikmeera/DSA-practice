/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result=[];
    for(let i=0;i<nums.length;i++){
        let num=Math.abs(nums[i]);
        let index=num-1;
        nums[index]=-Math.abs(nums[index])
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            result.push(i+1)
        }
    }
    return result
};