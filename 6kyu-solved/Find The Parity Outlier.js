function findOutlier (integers) {
    //your code here
    let tNum = 0, fNum = 0
    let finalNum = 0
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            tNum++
        } else {
            fNum++
        }
    }
    if (tNum > fNum) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                tNum++
            } else {
                finalNum = integers[i]
                fNum++
            }
        }
    } else {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                finalNum = integers[i]
                tNum++
            } else {
                fNum++
            }
        }
    }
    return finalNum
}

console.log(findOutlier([0, 1, 2]))