/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set();

for (const num of nums) {
    if (num > 0) {
        set.add(num);
    }
}

let i = 1;

while (set.has(i)) {
    i++;
}

return i;
};