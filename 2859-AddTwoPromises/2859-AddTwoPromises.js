// Last updated: 16/02/2026, 16:13:58
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    x=Promise.all([promise1,promise2]).then((a)=>a[0]+a[1])
    return x
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */