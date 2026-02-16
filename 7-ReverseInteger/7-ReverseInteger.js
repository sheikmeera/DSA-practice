// Last updated: 16/02/2026, 16:15:17
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign= x<0?-1:1;
    let a=String(Math.abs(x))
    a=a.split("").reverse().join("");
    a=Number(a);
    a=sign*a;
    if(a<-(2**31)||a>(2**31)){
        return 0
    }
    return a
};