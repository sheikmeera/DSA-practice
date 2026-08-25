/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let i = 0;

    while (i < words.length) {
        let line = [];
        let length = 0;

        while (
            i < words.length &&
            length + words[i].length + line.length <= maxWidth
        ) {
            line.push(words[i]);
            length += words[i].length;
            i++;
        }
        if (i === words.length) {
            let str = line.join(" ");

            while (str.length < maxWidth) {
                str += " ";
            }

            result.push(str);
            break;
        }
        if (line.length === 1) {
            result.push(line[0] + " ".repeat(maxWidth - length));
            continue;
        }
        let spaces = maxWidth - length;
        let gaps = line.length - 1;

        let extra = Math.floor(spaces / gaps);
        let remainder = spaces % gaps;

        let str = "";

        for (let j = 0; j < line.length - 1; j++) {
            str += line[j];

            let spaceCount = extra;

            if (j < remainder) {
                spaceCount++;
            }

            str += " ".repeat(spaceCount);
        }

        str += line[line.length - 1];

        result.push(str);
    }

    return result;
};