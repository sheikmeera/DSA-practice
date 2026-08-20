/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

    function backtrack(index, parts) {

        if (parts.length === 4) {
            if (index === s.length) {
                result.push(parts.join('.'));
            }

            return;
        }
        for (let len = 1; len <= 3; len++) {

            if (index + len > s.length) {
                break;
            }

            let part = s.substring(index, index + len);
            if (part.length > 1 && part[0] === '0') {
                break;
            }
            if (Number(part) > 255) {
                break;
            }

            parts.push(part);
            console.log(parts)
            console.log(result)
            backtrack(index + len, parts);

            parts.pop();
        }
    
    }

    backtrack(0, []);

    return result;
};