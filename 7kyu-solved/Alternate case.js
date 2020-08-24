function alternateCase (s) {
    let sArr = s.split``
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] != sArr[i].toUpperCase()) sArr[i] = sArr[i].toUpperCase()
        else if (sArr[i] == sArr[i].toUpperCase()) sArr[i] = sArr[i].toLowerCase()
        else {
            sArr[i] = sArr[i]
        }
    }
    return sArr.join``
}

console.log(alternateCase("Hello World"));

// const alternateCase = s => s
//     .split("")
//     .map(value => {
//         if (value != value.toUpperCase()) return value.toUpperCase();
//         return value.toLowerCase();
//     })
//     .join("")