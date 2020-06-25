const sort = (a, b) => a - b
function stray (numbers) {
    numbers.sort(sort)
    return numbers[0] == numbers[1] ? numbers[numbers.length - 1] : numbers[0]
}

console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))