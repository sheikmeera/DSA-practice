// Last updated: 16/02/2026, 16:14:27
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    sum=0;
    for(let i=1;i<points.length;i++){
        let a=Math.abs(points[i][0]-points[i-1][0]);
        let b=Math.abs(points[i][1]-points[i-1][1])
        
            sum+=Math.max(a,b)
    }
    return sum
};