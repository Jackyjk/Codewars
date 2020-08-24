function sum (matrix) {
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < matrix.length; i++) {
        arr1.push(matrix[i][i]);
        arr2.push(matrix[i].reverse()[i]);
    }
    return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
}

console.log(sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));