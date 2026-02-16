// Last updated: 16/02/2026, 16:14:33
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length
    let res=Array.from({length:n},()=>Array(m))
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            res[j][i]=matrix[i][j]
        }
    }
    return res
};