function cleanString (s) {
    s = s.split``;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            s[i] = "";
            s[i - 1] = "";
            s = s.filter(v => v !== "");
            i -= 2;
        }
    }
    return s.join``;
}

console.log(cleanString('abc#d##c'))
console.log(cleanString('abc####d##c#'));


function clean_string (s) {
    const result = []
    let sArr = s.split``
    for (let i = 0; i < sArr.length; i += 1) {
        if (sArr[i] === "#") {
            result.pop()
        } else {
            result.push(sArr[i])
        }
    }
    return result.join``
}

console.log(clean_string('abc#d##c'))
console.log(clean_string('abc####d##c#'));