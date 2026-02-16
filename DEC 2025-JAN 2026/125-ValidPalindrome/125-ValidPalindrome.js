// Last updated: 16/02/2026, 16:14:46
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
    // if(str.length<=1){
    //     return false;
    // }
    console.log(str.split("").reverse().join(""));
    console.log(str)
    return str.split("").reverse().join("")==str
};