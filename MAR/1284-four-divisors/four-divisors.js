/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let totalSum=0
    for(let num of nums){
        let div=new Set()
        for(let j=1;j*j<=num;j++){
            if(num%j===0){
                div.add(j)
                div.add(num/j)
            }
        }
        if(div.size===4){
            for(let val of div){
                totalSum+=val
            }
        }
    }
    return totalSum
};