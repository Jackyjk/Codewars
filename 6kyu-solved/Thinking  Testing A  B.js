function getNum (num) {
    num = num.toString().split('')
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    return sum
}

var testIt = (a, b) => getNum(a) * getNum(b)


//* function testIt (a, b) {
//*     return sum(a) * sum(b);
//* }
//* const sum = s => ('' + s).split('').reduce((a, n) => a + +n, 0)

console.log(testIt(200, 200));
console.log(testIt(54, 63));
console.log(testIt(5, 6));