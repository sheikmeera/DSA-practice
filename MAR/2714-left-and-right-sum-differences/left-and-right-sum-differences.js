/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n=nums.length;
    const result=new Array(n);
    let rightSum=0;
    for(let num of nums)rightSum+=num;
    let leftSum=0;
    for(let i=0;i<n;i++){
        rightSum-=nums[i];
        let diff=Math.abs(rightSum-leftSum);
        result[i]=diff;
        
        leftSum+=nums[i];

    }
    return result
};