/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev=0;
    let temp=x;
    while(temp>0){
        rev=rev*10+((Math.floor(temp%10)));
        temp=Math.floor(temp/10);
    }
    console.log(rev)
    return x==rev
};