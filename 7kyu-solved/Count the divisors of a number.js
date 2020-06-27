function getDivisorsCnt (num) {
    let sum = 0
    for (let i = num; i > 0; i--) {
        if (num % i == 0) sum++
    }
    return sum
}

console.log(getDivisorsCnt(30));
console.log(getDivisorsCnt(25));