// Last updated: 16/02/2026, 16:14:36
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let l=s.length;
    let prev=-Infinity;
    let arr=new Array(s.length)
    for(let i=0;i<l;i++){
        if(s[i]===c ){
            prev=i;
        }
        arr[i]=i-prev
    }
    prev = Infinity;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]===c ){
            prev=i;
        }
        arr[i]=Math.min(arr[i],prev-i)
    }
    return arr
};