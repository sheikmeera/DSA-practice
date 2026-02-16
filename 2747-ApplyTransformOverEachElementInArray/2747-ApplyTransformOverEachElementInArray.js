// Last updated: 16/02/2026, 16:14:12
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    x=new Array(arr.length)
    for(let i=0;i<arr.length;i++){
        x[i]=fn(arr[i],i)
    }
    return x
};