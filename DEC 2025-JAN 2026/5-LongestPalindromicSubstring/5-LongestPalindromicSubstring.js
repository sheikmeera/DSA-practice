// Last updated: 16/02/2026, 16:15:19
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start=0;
    let maxLen=0;
    function expand(left,right){
        while(s[left]==s[right]&&left>=0&&right<s.length){
            left--;
            right++;
        }
        return right-left-1
    }
    for(let i=0;i<s.length;i++){
        let len1=expand(i,i);
        let len2=expand(i,i+1)
        let currLen=Math.max(len1,len2);
        if(currLen>maxLen){
            maxLen=currLen;
            start=i-Math.floor((maxLen-1)/2)
        }

    }
    return s.substring(start,start+maxLen)
};
