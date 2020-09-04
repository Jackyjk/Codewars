function solve (a) {
    let minNum = 1, maxNum = 1;
    for (let i = 0; i < a.length; i++) {
        let arr = []
        for (let j = 0; j < a[i].length; j++) {
            arr.push(a[i][j] * minNum)
            arr.push(a[i][j] * maxNum)
        }
        minNum = Math.min(...arr)
        maxNum = Math.max(...arr)
    }

    return maxNum
}

console.log(solve([[1, 2], [3, 4]]));
console.log(solve([[10, -15], [-1, -3]]));
console.log(solve([[-1, 2, -3, 4], [1, -2, 3, -4]]));