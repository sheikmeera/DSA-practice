/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function isValid(row, col, num) {

        // Check row
        for (let c = 0; c < 9; c++) {
            if (board[row][c] === num) return false;
        }

        // Check column
        for (let r = 0; r < 9; r++) {
            if (board[r][col] === num) return false;
        }

        // Check 3x3 box
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (board[r][c] === num) return false;
            }
        }

        return true;
    }

    function solve() {

        for (let row = 0; row < 9; row++) {

            for (let col = 0; col < 9; col++) {

                if (board[row][col] === '.') {

                    for (let num = 1; num <= 9; num++) {

                        let digit = num.toString();

                        if (isValid(row, col, digit)) {

                            board[row][col] = digit;

                            if (solve()) {
                                return true;
                            }

                            // Backtrack
                            board[row][col] = '.';
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    solve();
};