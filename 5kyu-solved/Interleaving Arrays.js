function interleave () {
    let realArr = Array.from(arguments), maxLength = realArr[0].length, finalArr = []
    for (let i = 1; i < realArr.length; i++) {
        if (realArr[i].length > maxLength) {
            maxLength = realArr[i].length
        }
    }

    for (let i = 0; i < maxLength; i++) {
        for (const arr of realArr) {
            finalArr.push(i < arr.length ? arr[i] : null);
        }
    }
    return finalArr
}

console.log((interleave([1, 2, 3], [4, 5, 6], [7, 8, 9])));