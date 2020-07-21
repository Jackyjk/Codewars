function willFit (present, box) {
    present = present.sort((a, b) => a - b)
    box = box.sort((a, b) => a - b)
    return box.every((v, i) => v >= (present[i] + 2))
}

console.log(willFit([10, 2, 4], [6, 4, 12]));
console.log(willFit([1, 2, 3], [2, 1, 3]));