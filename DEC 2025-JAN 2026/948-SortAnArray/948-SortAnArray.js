// Last updated: 16/02/2026, 16:14:32
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<=1){
        return nums
    }
    function mergeSort(arr){
        if(arr.length<=1){
            return arr;
        }
        let mid=Math.floor(arr.length/2);
        let left=mergeSort(arr.slice(0,mid));
        let right=mergeSort(arr.slice(mid,arr.length))
        return merger(left,right)
    }
    function merger(left,right){
        let i=0;
        let j=0;
        let result=[];
        while(i<left.length&&j<right.length){
            if(left[i]<right[j]){
                result.push(left[i++])
            }
            else{
                result.push(right[j])
                j++
            }
        }
        while(i<left.length){
            result.push(left[i++])
        }
        while(j<right.length){
            result.push(right[j++])
        }
        return result;
    }
    return mergeSort(nums)
};