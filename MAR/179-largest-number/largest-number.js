/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
    const first = String(a) + String(b);
    const second = String(b) + String(a);

    return second.localeCompare(first);
  });

  if (nums[0] === 0) {
    return "0";
  }

  return nums.join("");
};