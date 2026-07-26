/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set=new Set(nums1);
    const result=new Set();
    for(const val of nums2){
        if(set.has(val)){
            result.add(val)
        }
    }
    return [...result]
};