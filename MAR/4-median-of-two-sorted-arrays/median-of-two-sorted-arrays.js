/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums=[...nums1,...nums2];
    nums.sort((a,b)=>a-b);
    let n=nums.length;
     let mid=Math.floor(n/2)
    if(n%2==0){
       
        return (nums[mid]+nums[mid-1])/2;
    }
    return nums[mid]
};