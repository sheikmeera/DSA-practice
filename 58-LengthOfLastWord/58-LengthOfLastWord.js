// Last updated: 16/02/2026, 16:14:58
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim(' ');
    let a=s.split(' ');
    return a[a.length-1].length
};