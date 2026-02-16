/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let bin=n.toString(2);
    let val=bin.split("").reverse().join("")
    let res=[];
    let p=0;
    for(let i=0;i<32;i++){
        if(p<val.length){
            res.push(val[p])
            p++
        }
        else{
            res.push(0)
        }
    }
    val=parseInt(res.join(""),2)
    return val
};