// Last updated: 16/02/2026, 16:14:40
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let l=nums.length
    let arr=new Array(l);
    arr[0]=1;
    for(let i=1;i<l;i++){
        arr[i]=arr[i-1]*nums[i-1];
    }
    let right=1;
    for(let i=l-1;i>=0;i--){
        arr[i]=arr[i]*right;
        right*=nums[i];
    }
    return arr
};