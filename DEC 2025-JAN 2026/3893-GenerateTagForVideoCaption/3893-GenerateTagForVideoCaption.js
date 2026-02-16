// Last updated: 16/02/2026, 16:13:54
/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    let arr=caption.split(" ").filter((w)=>w.length>0);
    if(arr.length===0)return "#";
    arr=arr.map((word,index)=>{
        let letters = "";
        for (let ch of word) {
            if (ch.toLowerCase() >= "a" && ch.toLowerCase() <= "z") {
                letters += ch;
            }
        }

        if (index === 0) {
            return letters.toLowerCase();
        }
        return letters[0].toUpperCase() + letters.slice(1).toLowerCase();
    }).filter(Boolean)
    arr=arr.join("").split("")
    if(arr.length>99){
        arr.length=99;
    }
    return "#"+arr.join("")
};