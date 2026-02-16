// Last updated: 16/02/2026, 16:14:19
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cach={}
    return function(...args) {
        let arg=JSON.stringify(args)
        if(arg in cach){
            return cach[arg]
        }
        let result=fn(...args)
        cach[arg]=result;
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */