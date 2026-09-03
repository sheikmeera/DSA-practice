/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set=new Set();
    for(num of nums){
        if(set.has(num)){
            console.log(num)
            return true;
        }
        set.add(num)
    }
    return false;
};