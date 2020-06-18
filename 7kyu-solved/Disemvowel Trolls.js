function disemvowel (str) {
    let finalArr = []
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == "a" || strArr[i] == "e" || strArr[i] == "i" || strArr[i] == "o" || strArr[i] == "u" || strArr[i] == "A" || strArr[i] == "E" || strArr[i] == "I" || strArr[i] == "O" || strArr[i] == "U") {
            continue
        }
        else finalArr.push(strArr[i])
    }
    return finalArr.join("")
}

console.log(disemvowel("This website is for losers LOL!"));