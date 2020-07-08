function extend () {
    let ret = {};
    for (let i = 0, n = arguments.length; i < n; i++) {
        if (!isObject(arguments[i])) continue;
        for (let j in arguments[i]) {
            if (!(j in ret)) ret[j] = arguments[i][j];
        }
    }
    return ret;
}

console.log(extend({ a: 1, b: 2 }, { c: 3 }));

// const extend = function (...args) {
//     const result = args
//         .reverse()
//         .reduce((acc, next) => {
//             return typeof next === 'object'
//                 ? Object.assign(acc, next)
//                 : acc;
//         }, {});
//     return result;
// }