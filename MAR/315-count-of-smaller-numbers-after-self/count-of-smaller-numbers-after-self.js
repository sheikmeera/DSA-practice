/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const n = nums.length;
    const counts = new Array(n).fill(0);

    // Store value with original index
    const arr = nums.map((value, index) => ({ value, index }));

    function mergeSort(left, right) {
        if (left >= right) return;

        const mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        merge(left, mid, right);
    }

    function merge(left, mid, right) {
        const temp = [];

        let i = left;
        let j = mid + 1;

        let rightMoved = 0;

        while (i <= mid && j <= right) {
            if (arr[i].value <= arr[j].value) {
                counts[arr[i].index] += rightMoved;
                temp.push(arr[i]);
                i++;
            } else {
                rightMoved++;
                temp.push(arr[j]);
                j++;
            }
        }

        while (i <= mid) {
            counts[arr[i].index] += rightMoved;
            temp.push(arr[i]);
            i++;
        }

        while (j <= right) {
            temp.push(arr[j]);
            j++;
        }

        for (let k = left; k <= right; k++) {
            arr[k] = temp[k - left];
        }
    }

    mergeSort(0, n - 1);

    return counts;
};