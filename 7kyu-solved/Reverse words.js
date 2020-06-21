function reverseWords (str) {
    // Go for it
    let strArr = str.split(" ")
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].split("").reverse().join("")
    }
    return strArr.join(" ")
}

console.log(reverseWords('double  spaced  words'))
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))