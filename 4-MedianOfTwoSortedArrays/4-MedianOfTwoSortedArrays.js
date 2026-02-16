// Last updated: 16/02/2026, 16:15:20
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[...nums1,...nums2]
    arr.sort((a,b)=>(a-b));
    let l=arr.length;
    let mid=0;
    console.log
    if(l%2!==0){
        mid=(l-1)/2
        return  arr[mid]
    }
    else{
        mid=arr.length/2
        return (arr[mid]+arr[mid-1])/2
    }
};