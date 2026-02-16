// Last updated: 16/02/2026, 16:13:52
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count=0;
    while(!isSorted(nums)){
        let min=Infinity;
        index=0;

        for(let i=0;i<nums.length-1;i++){
            let sum=nums[i]+nums[i+1];
            if(sum<min){
                min= sum;
                index=i;
            }
        }
        nums.splice(index,2,min);
        count++;
    }
    return count;
};
function isSorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}