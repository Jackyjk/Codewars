function sequenceSum (begin, end, step) {
    let sum = 0
    for (let i = begin; i <= end; i += step) sum += i
    return sum
}

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));