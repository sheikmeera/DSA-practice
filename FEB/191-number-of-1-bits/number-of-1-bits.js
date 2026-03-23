/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let val=n.toString(2);
    let count=0;
    for(let c of val.split('')){
        if(c==1){
            count++
        }
    }
    return count;
};