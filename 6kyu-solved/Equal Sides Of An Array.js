function findEvenIndex (arr) {
    let lNum = 0
    let rNum = arr.reduce((s, n) => s + n, 0)
    for (let i = 0; i < arr.length; i++) {
        rNum -= arr[i]
        if (lNum === rNum) return i
        lNum += arr[i]
    }
    return -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))