function allSquaredPairs (num) {
    let finalArr = [];
    for (let i = 0; i <= Math.sqrt(num / 2); i++) {
        let j = Math.sqrt(num - i * i);
        if (j % 1 == 0) {
            finalArr.push([i, j]);
        }
    }
    return finalArr;
}

console.log(allSquaredPairs(25));
console.log(allSquaredPairs(0));
console.log(allSquaredPairs(16));