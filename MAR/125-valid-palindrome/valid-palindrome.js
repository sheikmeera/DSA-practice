/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toUpperCase();
    let str="";
    
    for(let i=0;i<s.length;i++){
       if((s[i]>='A'&&s[i]<='Z')||(s[i]>='0'&&s[i]<="9")){
        str+=s[i];
       }
    }
    return str.split("").reverse().join("")==str
};