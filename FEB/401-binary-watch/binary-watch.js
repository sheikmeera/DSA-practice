/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let res=[];
    for(let hour=0;hour<12;hour++){
        for(let minute=0;minute<60;minute++){
            if((hour.toString(2).split("1").length-1)+(minute.toString(2).split("1").length-1)==turnedOn){
                res.push(`${hour}:${minute.toString().padStart(2,0)}`)
            }
        }
    }
    return res
};