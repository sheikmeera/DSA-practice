/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let val=Math.floor(Math.sqrt(area));
    while(area%val!==0){
        val--
    }
    return [area/val,val]
};