function dontGiveMeFive (start, end) {
    let sum = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) sum++
    }
    return sum
}


console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(-5, -2));
console.log(dontGiveMeFive(-5, 8));