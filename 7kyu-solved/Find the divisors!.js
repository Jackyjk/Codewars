const sort = (a, b) => a - b
function divisors (num) {
    let arr = []
    for (let i = 2; i <= parseInt(num / 2); i++) {
        for (let j = i; j <= parseInt(num / 2); j++) {
            if (i * j == num) {
                arr.push(i)
                arr.push(j)
            }
        }
    }
    let arr1 = new Set(arr)
    return Array.from(arr1).length > 0 ? Array.from(arr1).sort(sort) : `${num} is prime`
}


console.log(divisors(12))
console.log(divisors(25))
console.log(divisors(13))