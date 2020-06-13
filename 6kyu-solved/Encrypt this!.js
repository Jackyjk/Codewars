function encryptThis(text) {
    // Implement me! :)
    if (text.length === 0) return ""
    else {
        let newStr = text.split(" ")
        let finalStrArr = newStr.map(el => {
            let str = el.split("")
            str[0] = el.charCodeAt(0);
            [str[1], str[str.length - 1]] = [str[str.length - 1], str[1]]
            return str.join("")
        })
        return finalStrArr.join(" ")
    }

}

console.log(encryptThis("A"));
console.log(encryptThis("Hello"));      //72olle
console.log(encryptThis("hello world")); // "104olle 119drlo"