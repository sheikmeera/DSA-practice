/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper=0;
    for(let char of word){
        if(char==char.toUpperCase()){
            upper++;
        }
    }
    return (upper===word.length||upper==0||(upper==1&&word[0]==word[0].toUpperCase()))
};