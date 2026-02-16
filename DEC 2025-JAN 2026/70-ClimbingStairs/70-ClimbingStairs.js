// Last updated: 16/02/2026, 16:14:54
/**
 * @param {number} n
 * @return {number}
 */
 
var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    let last=2;
    let sec=1
    let c=0;
    for(let i=3;i<=n;i++){
        c=sec+last;
        sec=last;
        last=c
    }
    return c
};