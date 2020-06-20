const sort1 = (a, b) => a - b
const sort2 = (a, b) => b - a
function highAndLow (numbers) {
    // ...
    let arr = [].concat(numbers.split(" "))
    return `${arr.sort(sort2)[0]} ${arr.sort(sort1)[0]}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));