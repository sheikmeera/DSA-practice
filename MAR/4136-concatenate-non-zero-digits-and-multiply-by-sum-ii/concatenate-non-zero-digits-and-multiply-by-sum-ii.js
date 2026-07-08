/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    const prefix = new Array(n + 1).fill(0);

    const pos = [];
    const digits = [];

    for (let i = 0; i < n; i++) {
        const d = s.charCodeAt(i) - 48;
        prefix[i + 1] = prefix[i] + d;

        if (d !== 0) {
            pos.push(i);
            digits.push(BigInt(d));
        }
    }

    const m = digits.length;

    const pow10 = new Array(m + 1);
    pow10[0] = 1n;
    for (let i = 1; i <= m; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }

    const hash = new Array(m + 1);
    hash[0] = 0n;

    for (let i = 0; i < m; i++) {
        hash[i + 1] = (hash[i] * 10n + digits[i]) % MOD;
        console.log(hash[i+1])
    }

    function lowerBound(target) {
        let l = 0, r = pos.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (pos[mid] < target)
                l = mid + 1;
            else
                r = mid;
        }
        return l;
    }

    function upperBound(target) {
        let l = 0, r = pos.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (pos[mid] <= target)
                l = mid + 1;
            else
                r = mid;
        }
        return l;
    }

    const ans = [];

    for (const [l, r] of queries) {

        const sum = BigInt(prefix[r + 1] - prefix[l]);

        let left = lowerBound(l);
        let right = upperBound(r) - 1;

        if (left > right) {
            ans.push(0);
            continue;
        }

        const len = right - left + 1;

        let x = (
            hash[right + 1]
            - (hash[left] * pow10[len]) % MOD
            + MOD
        ) % MOD;

        ans.push(Number((x * sum) % MOD));
    }

    return ans;
};