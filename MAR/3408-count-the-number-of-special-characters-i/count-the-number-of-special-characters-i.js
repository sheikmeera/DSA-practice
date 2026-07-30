/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
     const set = new Set(word);
    let ans = 0;

    for (let i = 0; i < 26; i++) {
        const l = String.fromCharCode(97 + i);
        const u = String.fromCharCode(65 + i);

        if (set.has(l) && set.has(u)) {
            ans++;
        }
    }

    return ans;
};