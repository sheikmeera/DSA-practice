// Find First and Last Position of Element in Sorted Array

// My Code:O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first=-1,last=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target&&first==-1){
            first=i;
            last=i
        }
        else if(nums[i]==target){
            last=i
        }
    }
    return [first,last]
};


// Optimizable code:O(log n)

var searchRange = function(nums, target) {
    let first = findFirst(nums, target);
    let last = findLast(nums, target);
    return [first, last];
};

function findFirst(nums, target) {
    let low = 0, high = nums.length - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            ans = mid;
            high = mid - 1; // move left
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

function findLast(nums, target) {
    let low = 0, high = nums.length - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            ans = mid;
            low = mid + 1; // move right
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}
