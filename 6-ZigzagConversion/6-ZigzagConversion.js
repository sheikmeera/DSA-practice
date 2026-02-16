// Last updated: 16/02/2026, 16:15:18
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rows=Array(numRows).fill("");
    let current=0;
    let going=false
    if(numRows===1||s.length<numRows)return s;
    for(let ch of s){
        rows[current]+=ch;
        if(current===0||current===rows.length-1){
            going=!going;
        }
        current= current + (going? 1 : -1)
        console.log(current)
    }
    return rows.join("")
};