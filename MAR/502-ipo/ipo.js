/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
        let projects = [];

    for (let i = 0; i < profits.length; i++) {
        projects.push([capital[i], profits[i]]);
    }

    projects.sort((a, b) => a[0] - b[0]);

    let heap = [];

    function push(value) {
        heap.push(value);

        let i = heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (heap[parent] >= heap[i]) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];

            i = parent;
        }
    }

    function pop() {
        let max = heap[0];
        let last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let largest = i;

                if (left < heap.length && heap[left] > heap[largest]) {
                    largest = left;
                }

                if (right < heap.length && heap[right] > heap[largest]) {
                    largest = right;
                }

                if (largest === i) break;

                [heap[i], heap[largest]] = [heap[largest], heap[i]];

                i = largest;
            }
        }

        return max;
    }

    let i = 0;

    for (let count = 0; count < k; count++) {
        while (i < projects.length && projects[i][0] <= w) {
            push(projects[i][1]);
            i++;
        }
        if (heap.length === 0) break;
        w += pop();
    }

    return w;
};