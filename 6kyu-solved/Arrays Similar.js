const sortFunc = (a, b) => a - b

//* Mine
// function arraysSimilar (arr1, arr2) {
//     let flag = true
//     if (arr1.length != arr2.length) return !flag
//     arr1 = arr1.sort(sortFunc)
//     arr2 = arr2.sort(sortFunc)

//     for (let i = 0; i < arr1.length; i++)  if (typeof (arr1[i]) === typeof (arr2[i])) {
//         if (arr1[i] == arr2[i]) flag = flag
//         else {
//             flag = !flag
//             break
//         }
//     } else {
//         flag = !flag
//         break
//     }
//     return flag
// }
const arraysSimilar = (arr1, arr2) => arr1.sort(sortFunc).length == arr2.sort(sortFunc).length && arr1.every(function (a, i) { return a === arr2[i]; });

var arr5 = [1, 2, 2, 3],
    arr6 = [3, 3, 2, 1]

console.log(arraysSimilar(arr5, arr6));