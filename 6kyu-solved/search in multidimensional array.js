function flatten (arr) {
    return arr.reduce(function (prev, item) {
        return prev.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
var locate = (arr, value) => flatten(arr).includes(value)

//* other
// var locate = (arr, v) =>arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });

console.log(locate(['a', 'b', ['c', 'd', ['three']]], 'three'));
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'a'));
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'f'));
console.log(locate([1, 2, [3, 4, [5]]], 3));

//! 只对两层有效
// var locate = (arr, value) => [].concat(...([].concat(...arr))).includes(value)

//! 只对字符串有效
// var locate = (arr, value) => arr.toString().split(",").includes(value)

//! 只能对数字有效
// function flatten1 (arr) {
//     return arr.toString().split(',').map(function (item) {
//         return +item;
//     })
// }