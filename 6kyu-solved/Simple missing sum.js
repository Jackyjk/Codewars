// const sort = (a, b) => a - b

// function solve (arr) {
//     //..
//     let sum = 0, oArr = []
//     arr = arr.sort(sort)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == i + 1) {
//             sum += i + 1
//             oArr.push(arr[i])
//         } else {
//             break
//         }
//     }
//     return sum > arr[arr.length - 1] ? (arr[arr.length - 1] + sum + 1) : sum + 1
// }

function solve (arr) {
    arr = arr.sort((a, b) => a - b);
    if (arr[0] > 1) return 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i + 1] > sum + 1) return sum + 1;
    }
    return sum + 1;
}


console.log(solve([1, 2, 8, 7]));
console.log(solve([4, 2, 12, 3, 1]));
console.log(solve([4, 2, 8, 3, 1]));
console.log(solve([4, 2, 12, 3]));