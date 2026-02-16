// Last updated: 16/02/2026, 16:14:57
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let val=0n;
    for(let i=0;i<digits.length;i++){
        val=val*10n+BigInt(digits[i])
    }
    val++;
    digits=String(val).split('').map((a)=>(Number(a)))
    return digits
};