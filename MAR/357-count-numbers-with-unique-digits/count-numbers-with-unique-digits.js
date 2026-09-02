/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
        if (n === 0) return 1;

    let result = 10;
    let unique = 9;
    let available = 9;

    for (let digits = 2; digits <= n; digits++) {
        unique = unique * available;
        result += unique;
        available--;
    }

    return result;
};