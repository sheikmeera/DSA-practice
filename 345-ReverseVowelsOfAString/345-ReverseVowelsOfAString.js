// Last updated: 16/02/2026, 16:14:39
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left=0;
    let right=s.length-1;
    let arr=s.split("")
    while(left<right){
        if(s[left].toLowerCase()==='a'||s[left].toLowerCase()==='e'||s[left].toLowerCase()==='i'||s[left].toLowerCase()==='o'||s[left].toLowerCase()==='u'){
            if(s[right].toLowerCase()==='a'||s[right].toLowerCase()==='e'||s[right].toLowerCase()==='i'||s[right].toLowerCase()==='o'||s[right].toLowerCase()==='u'){
                    arr[left]=s[right];
                    arr[right]=s[left];
                    left++;
                    right--
            }
            else{
                right--;
            }
        }
        else{
            left++;
        }
    }
    return arr.join("")
};