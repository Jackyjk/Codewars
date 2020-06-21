// // const sort = (a, b) => a - b
// function removeSmallest (numbers) {
//     let min = numbers[0]
//     let index = 0
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i]
//             index = i
//         }
//     }
//     numbers.splice(index, 1)
//     return numbers
// }


function removeSmallest (numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([2, 2, 1, 2, 1]))