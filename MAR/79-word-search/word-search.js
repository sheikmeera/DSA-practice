/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows=board.length;
    const cols=board[0].length;

    function dfs(row,col,index){
        if(index===word.length){
            return true
        }
        if(row<0||row>=rows||col<0||col>=cols){
            return false;
        }
        if(board[row][col]!==word[index]){
            return false;
        }
        let temp=board[row][col]
        board[row][col]='#'

        const found=dfs(row,col+1,index+1)||dfs(row,col-1,index+1)||dfs(row+1,col,index+1)||dfs(row-1,col,index+1);

        board[row][col]=temp;
        return found;
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }
    return false

};