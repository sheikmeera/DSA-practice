// Last updated: 16/02/2026, 16:14:11
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return Promise.race([fn(...args),new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("Time Limit Exceeded")
            },t)
        })])
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */