// Last updated: 16/02/2026, 16:14:22
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum = 0;
    let negCount = 0;
    let minAbs = Infinity;

    for (let row of matrix) {
        for (let val of row) {
            let absVal = Math.abs(val);
            sum += absVal;

            if (val < 0) negCount++;

            minAbs = Math.min(minAbs, absVal);
        }
    }

    if (negCount % 2 === 1) {
        sum -= 2 * minAbs;
    }

    return sum;
};