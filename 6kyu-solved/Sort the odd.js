// const sort = (a, b) => a - b
// const compact = arr => arr.filter(res => res != undefined)

// function sortArray (arr) {
//     if (arr.length == 0) return []
//     let oddArr = []
//     let evenArr = []
//     for (let i = 0; i < arr.length; i += 2) {
//         oddArr.push(arr[i])
//         evenArr.push(arr[i + 1])
//     }
//     oddArr.sort(sort)
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(oddArr[i])
//         newArr.push(evenArr[i])
//     }
//     return compact(newArr)
// }

function sortArray (array) {
    const odd = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => (x % 2 ? odd.shift() : x));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
// console.log(sortArray([5, 3, 2, 8, 1, 4,6]));