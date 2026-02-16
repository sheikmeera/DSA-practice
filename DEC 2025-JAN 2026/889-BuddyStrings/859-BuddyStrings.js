// Last updated: 16/02/2026, 16:14:34
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length!==goal.length){
        return false
    }
    if(s===goal){
        let set=new Set(s);
        return set.size<s.length;
    }
    let mis=[]
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]!==goal[i]){
            count++;
            mis.push(i)
        }
    }
    if(count!==2){
        return false;
    }
    return s[mis[0]]===goal[mis[1]]&&s[mis[1]]===goal[mis[0]]
};
