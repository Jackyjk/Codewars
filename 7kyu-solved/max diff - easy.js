const mySort = (a, b) => a - b
const maxDiff = list => list.sort(mySort).length > 1 ? (list.sort(mySort)[list.sort(mySort).length - 1] - list.sort(mySort)[0]) : 0


console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]))
console.log(maxDiff([16]));
console.log(maxDiff([]));