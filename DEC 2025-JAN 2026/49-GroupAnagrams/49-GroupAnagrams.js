// Last updated: 16/02/2026, 16:14:59
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    for(let i=0;i<strs.length;i++){
        let val=strs[i].split("").sort().join('');
        if(map.has(val)){
            let pair=map.get(val)
            pair.push(strs[i])
            map.set(val,pair)
        }
        else{
            map.set(val,[strs[i]])
        }
    }
    let res=Array.from(map.values());
    console.log(res)
    return res
};