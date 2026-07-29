/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA=0,sumB=0;
    for(const val of aliceSizes)sumA+=val;
    for(const val of bobSizes)sumB+=val;

    let diff=(sumA-sumB)/2;

    const set=new Set(aliceSizes);

    for(let b of bobSizes){
        let a=b+diff;
        if(set.has(a)){
            return [a,b]
        }
    }
};