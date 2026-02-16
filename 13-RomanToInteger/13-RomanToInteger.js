// Last updated: 16/02/2026, 16:15:14
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const value={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let val=0;
    for(let i=1;i<s.length;i++){
        let current=value[s[i]]
        let prev=value[s[i-1]]
        if(current>prev){
            val=val-prev
        }
        else{
            val=val+prev
        }
    }
    val=val+value[s[s.length-1]]
    return val
};