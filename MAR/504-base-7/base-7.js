/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return "0";

    let sign = num < 0 ? "-" : "";
    num = Math.abs(num);

    let result = "";

    while (num > 0) {
        let remainder = num % 7;

        result = remainder + result;

        num = Math.floor(num / 7);
    }

    return sign + result;
};