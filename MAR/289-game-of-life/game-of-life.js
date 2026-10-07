/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    let rows = board.length;
    let cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            let count = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {

                    if (dr === 0 && dc === 0) continue;

                    let nr = r + dr;
                    let nc = c + dc;

                    if (
                        nr >= 0 &&
                        nr < rows &&
                        nc >= 0 &&
                        nc < cols
                    ) {
                        if (
                            board[nr][nc] === 1 ||
                            board[nr][nc] === 3
                        ) {
                            count++;
                        }
                    }
                }
            }
            if (board[r][c] === 1) {
                if (count < 2 || count > 3) {
                    board[r][c] = 3;
                }
            }
            else {
                if (count === 3) {
                    board[r][c] = 2;
                }
            }
        }
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (board[r][c] === 2) {
                board[r][c] = 1;
            }
            else if (board[r][c] === 3) {
                board[r][c] = 0;
            }
        }
    }
};