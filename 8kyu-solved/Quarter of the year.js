const quarterOf = (month) => {
    // Your code here
    if ([1, 2, 3].includes(month)) return 1
    if ([4, 5, 6].includes(month)) return 2
    if ([7, 8, 9].includes(month)) return 3
    if ([10, 11, 12].includes(month)) return 4
}

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));