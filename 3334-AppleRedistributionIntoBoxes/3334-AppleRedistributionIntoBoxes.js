// Last updated: 16/02/2026, 16:13:49
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let count=apple.reduce(((acc,i)=>acc+i),0);
    capacity.sort((a,b)=>b-a);
    let cou=0;
    let sum=0;
    for(let i=0;i<capacity.length;i++){
        sum+=capacity[i];
        cou++;
        if(sum>=count){
            return cou;
        }
    }
};