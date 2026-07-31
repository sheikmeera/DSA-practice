/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {

    let ans = 0;

    for (let digit = 1; digit <= n; digit *= 10) {

        let higher = Math.floor(n / (digit * 10));
        let current = Math.floor(n / digit) % 10;
        let lower = n % digit;

        if (current === 0) {
            ans += higher * digit;
        }
        else if (current === 1) {
            ans += higher * digit + lower + 1;
        }
        else {
            ans += (higher + 1) * digit;
        }
    }

    return ans;
};