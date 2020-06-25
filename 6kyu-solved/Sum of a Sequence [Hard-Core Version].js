//! Timeout
function sequenceSum (begin, end, step) {
    let sum = 0
    // if (begin == -1 && end == -5 && step == -3) return -5
    if (end < begin) for (let i = begin; i >= end; i += step) sum += i
    else for (let i = begin; i <= end; i += step) sum += i
    return sum
}

console.log(sequenceSum(-1, -5, -3))    //-5  -1 + -4
console.log(sequenceSum(780, 68515438, 5))
console.log(sequenceSum(-24, 2, 22))
console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(-2, 4, 658));