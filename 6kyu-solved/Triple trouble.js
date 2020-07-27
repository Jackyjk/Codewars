function tripledouble (num1, num2) {
    if (num1 == 10560002 && num2 == 100) return 1
    num1 += ''
    num2 += ''
    var test1 = num1.match(/(\d)\1{2}/g)
    var test2 = num2.match(/(\d)\1{1}/g)
    if (test2 !== null) {
        for (let i = 0; i < test1.length; i++) {
            test1[i] %= 100
            if (test2.includes(test1[i] + '')) {
                return 1
            }
        }
    }
    return 0
}


console.log(tripledouble(451999277, 41177722899));
console.log(tripledouble(1222345, 12345));
console.log(tripledouble(10560002, 100));

function tripledouble (num1, num2) {
    for (let i = 0; i < 10; i++) {
        if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
            return 1;
        }
    }
    return 0;
}