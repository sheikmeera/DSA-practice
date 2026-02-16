// Last updated: 16/02/2026, 16:14:13
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const update=[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            update.push(arr[i])
        }
    }
    return update;
};