// Last updated: 16/02/2026, 16:14:56
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum=BigInt('0b'+a)+BigInt('0b'+b);
    return sum.toString(2)
};