/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    
    let result = [""];
    
    for (let digit of digits) {
        let temp = [];
        
        for (let combination of result) {
            for (let letter of map[digit]) {
                temp.push(combination + letter);
            }
        }
        
        result = temp;
    }
    
    return result;
};