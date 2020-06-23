function digPow (num, k) {
    let numArr = num.toString().split("")
    let sum = 0
    for (let i = 0; i < numArr.length; i++) {
        sum += Math.pow(Number(numArr[i]), k)
        k++
    }
    return (sum / num) % 1 == 0 ? (sum / num) : -1
}


console.log(digPow(695, 2))
console.log(digPow(46288, 3))
console.log(digPow(92, 1))