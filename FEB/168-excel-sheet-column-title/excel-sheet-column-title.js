/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res="";
    while(columnNumber>0){
        columnNumber--;
        let rem=columnNumber%26;
        res=String.fromCharCode(65+rem)+res
        columnNumber=Math.floor(columnNumber/26)
    }
    return res
};