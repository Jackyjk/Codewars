function save (sizes, hd) {
    // your code here
    let flag = true
    let sum = 0;
    for (let i = 0; i <= sizes.length; i++) {
        sum += sizes[i]
        if (sum <= hd) {
            flag = true
        } else {
            flag = false
            return i
        }
    }
}

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([4, 4, 4, 3, 3], 11));
console.log(save([4, 8, 15, 16, 23, 42], 108));