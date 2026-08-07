/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const arr = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            arr.push(ch)
        }
        else {
            if (arr.length === 0) {
                return false
            }
            let top = arr.pop();
            if (top !== map[ch]) {
                return false
            }
        }
    }
    return arr.length === 0
};