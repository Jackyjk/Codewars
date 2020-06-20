var countBits = function (n) {
    // Program Me
    let strArr = n.toString(2).split("")
    let count = 0
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == '1') count++
    }
    return count
};

console.log(countBits(4));
console.log(countBits(9));
console.log(countBits(10));