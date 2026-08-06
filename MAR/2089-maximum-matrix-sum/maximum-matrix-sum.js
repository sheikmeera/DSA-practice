/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum=0;
    let minVal=Infinity;
    let count=0;

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            let val=matrix[i][j]
            if(val<0)count++;
            minVal=Math.min(minVal,Math.abs(val));
            sum+=Math.abs(val)
        }
    }
    return count%2===0?sum:sum-2*minVal
};