function capitalize (s) {
    let sArr1 = [].concat(...s)
    let sArr2 = [].concat(...s)
    for (let i = 0; i < sArr1.length; i++) {
        if (i % 2 == 0) sArr1[i] = sArr1[i].toUpperCase()
    }
    for (let i = 0; i < sArr2.length; i++) {
        if (i % 2 != 0) sArr2[i] = sArr2[i].toUpperCase()
    }
    return [sArr1.join(""), sArr2.join("")];
}

console.log(capitalize("abcdef"));