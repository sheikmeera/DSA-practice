/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let grid=Array.from({length:m},()=>Array(n).fill('#'))
    // console.log(grid);
    grid[0].fill('.');
    for(let i=0;i<grid.length;i++){
        grid[i][n-1]='.'
    }
    console.log(grid)
    return grid.map((ele)=>ele.join(''))
};