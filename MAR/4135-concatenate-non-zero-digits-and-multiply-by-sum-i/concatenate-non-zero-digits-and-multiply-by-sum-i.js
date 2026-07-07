/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let sum=0;
    let val='';
    if(n==0){
        return 0;
    }
    let num=n.toString()
    for(let i=0;i<num.length;i++){
        if(num[i]!=0){
            val+=num[i]
            sum+=Number(num[i])
        }
    }
    return val*sum
};