// Last updated: 16/02/2026, 16:15:15
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp=x;
        let rev=0
        while(temp>0){
            rev=rev*10+(temp%10)
            temp=Math.floor(temp/10)
        }
        if(rev===x){
            return true
        }
        else{
            return false
        }
};