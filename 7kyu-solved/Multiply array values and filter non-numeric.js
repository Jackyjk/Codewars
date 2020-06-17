function multiplyAndFilter (array, multiplier) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            arr.push(array[i] * multiplier)
        }
    }
    return arr
}
// function multiplyAndFilter (array, multiplier) {
//     return array.filter(v => typeof v === "number").map(v => v * multiplier);
// }


console.log(multiplyAndFilter([1, 2, 3, 4], 1.5));
console.log(multiplyAndFilter([1, null, function () { }, 2.5, 'string', 10, undefined, {}, []], 3));