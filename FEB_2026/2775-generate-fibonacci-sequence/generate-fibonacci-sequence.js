/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let val=0
    val2=1
    val3=0
    while(true){
        yield val
        val3=val2+val;
        val=val2;
        val2=val3;
        
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */