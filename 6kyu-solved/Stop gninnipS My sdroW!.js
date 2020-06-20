function spinWords (s) {
    //TODO Have fun :)
    let strArr = s.split(" ")
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 5) {
            strArr[i] = strArr[i].split("").reverse().join("")
        }
    }
    return strArr.join(" ")
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Just kidding there is still one more"));