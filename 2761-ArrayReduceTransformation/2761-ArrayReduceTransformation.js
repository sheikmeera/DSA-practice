// Last updated: 16/02/2026, 16:14:09
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc=init
    for(val of nums){
        acc=fn(acc,val)
    }
    return acc;
};