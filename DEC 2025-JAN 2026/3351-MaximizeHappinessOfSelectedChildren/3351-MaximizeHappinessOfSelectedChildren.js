// Last updated: 16/02/2026, 16:13:53
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a)
    let sum=0;
    for(let i=0;i<k;i++){
        let current=happiness[i]-i;
        if(current>0){
            sum += current;
        }
    }
    return sum;
};