// Last updated: 16/02/2026, 16:14:24
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m=grid.length;
    let count=0;
    for(let i=0;i<m;i++){
        let j=grid[i].length-1;
        while(grid[i][j]<0&&(j>=0)){
            count++
            j--
        }
    }
    return count
};