/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let result=[0];

    for(let i=0;i<n;i++){
        let a=1<<i;
        for(j=result.length-1;j>=0;j--){
            result.push(result[j]+a)
        }
    }
    return result
};