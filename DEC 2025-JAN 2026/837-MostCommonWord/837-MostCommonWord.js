// Last updated: 16/02/2026, 16:14:37
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let obj={

    }
    let arr=[];
    let word="";
    let max=1;
    for(let ch of paragraph){
        if((ch.toLowerCase()>="a"&&ch.toLowerCase()<="z")){
            word=word+ch.toLowerCase();
        }
        else{
            if(word.length>0&&banned.indexOf(word)==-1){
                arr.push(word);
                
            }
            word="";
        }
        
    }
    if(word.length>0){
            arr.push(word)
        }
    for(let word of arr){
        obj[word]=(obj[word]||0)+1
        console.log(word,obj[word])
        if(obj[word]>max){
            max=obj[word]
        }

    }
    for(let [k,v] of Object.entries(obj)){
        if(v===max){
            return k
        }
    }
};