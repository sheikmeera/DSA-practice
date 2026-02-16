// Last updated: 16/02/2026, 16:14:04
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res=[]
    let i=0;
    for(i=0;i<arr.length;i=i+size)
    {
        res.push(arr.slice(i,i+size));
        console.log(res)
    }
    return res
};
