/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows=Array.from({length:9},()=>new Set());
    const cols=Array.from({length:9},()=>new Set());
    const boxes=Array.from({length:9},()=>new Set());

    for(let row=0;row<board.length;row++){
        for(let col=0;col<board[row].length;col++){
            let val=board[row][col];
            if(val=='.'){
                continue;
            }
            const box=Math.floor(row/3)*3+Math.floor(col/3);
            if(rows[row].has(val)||cols[col].has(val)||boxes[box].has(val)){
                return false;
            }
            rows[row].add(val);
            cols[col].add(val);
            boxes[box].add(val);
        }
    }
    return true;
};