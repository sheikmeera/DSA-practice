// Last updated: 16/02/2026, 16:14:03
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const word="Hello World"
    return function(...args) {
        return word
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */