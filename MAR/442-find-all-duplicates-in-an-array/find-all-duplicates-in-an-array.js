/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let set=new Set();
    let result=[];
    for(let val of nums){
        if(set.has(val)){
            result.push(val)
        }
        else{
            set.add(val)
        }
    }
    return result
    
};