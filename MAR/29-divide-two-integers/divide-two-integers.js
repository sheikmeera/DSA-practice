/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let negative = false;

    if (
        (dividend < 0 && divisor > 0) ||
        (dividend > 0 && divisor < 0)
    ) {
        negative = true;
    }

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {

        let temp = b;
        let count = 1;

        while (a >= temp + temp) {
            temp = temp + temp;
            count = count + count;
        }

        a = a - temp;
        result = result + count;
    }
    if (negative) {
        return -result;
    }
    return result;
};