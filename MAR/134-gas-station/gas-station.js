/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n=gas.length;
    let total=0;
    let start=0;
    let current=0;
    for(let i=0;i<gas.length;i++){
        let diff=gas[i]-cost[i];
        current=current+diff;
        total+=diff;
        if(current<0){
            start=i+1;
            current=0
        }
    }
    return total>=0?start:-1

};