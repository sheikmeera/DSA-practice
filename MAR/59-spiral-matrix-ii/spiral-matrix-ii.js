/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix=Array.from({length:n},()=>Array(n).fill(0));
    let left=0;
    let right=n-1;
    let top=0;
    let bottom=n-1;
    let num=1;
    while(left<=right&&top<=bottom){
        for(let i=left;i<=right;i++){
            matrix[top][i]=num;
            num++
        }
        top++;
        for(let i=top;i<=bottom;i++){
            matrix[i][right]=num;
            num++
        }
        right--;
        for(let j=right;j>=left;j--){
            matrix[bottom][j]=num;
            num++
        }
        bottom--;
        for(let j=bottom;j>=top;j--){
            matrix[j][left]=num;
            num++
        }
        left++
    }
    return matrix
};