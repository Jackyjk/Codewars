function findOutlier (numbers) {
    // ...
    return numbers.split(" ")
}

function iqTest (str) {
    //your code here
    let integers = findOutlier(str)
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
                finalNum = i + 1
                fNum++
            }
        }
    } else {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                finalNum = i + 1
                tNum++
            } else {
                fNum++
            }
        }
    }
    return finalNum
}

console.log(iqTest("2 4 7 8 10"))