// Last updated: 16/02/2026, 16:15:16
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0;
    let sign=1;
    let val=0;
    while(s[i]===" "&&i<s.length){
        i++;
    }
    if(s[i]==="-"||s[i]==="+"){
        sign=s[i]==="-"?-1:1
        i++
    }
    while(i<s.length&&(s[i]>='0')&&(s[i]<='9')){
        val=val*10+(s[i]-0)
        i++;
    }
    val=sign*val;
    if(val<-(2**31)){
        return -(2**31)
    }
    else if(val>(2**31)-1){
        return (2**31)-1
    }
    return val
};