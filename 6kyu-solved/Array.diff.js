function array_diff (a, b) {
    return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([], [4, 5]))
console.log(arrayDiff([1, 1, 1, 1], [4, 5]))