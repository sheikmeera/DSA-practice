// Last updated: 16/02/2026, 16:15:12
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let l=strs.length
    strs.sort();
    let res="";
    let a=strs[0];
    let b=strs[l-1];
    console.log(strs)
    for(let i=0;i<b.length;i++){
        if(a[i]==b[i]){
            res=res+a[i]
        }
        else{
            break;
        }
    }
    return res;
};