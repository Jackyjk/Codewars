function toCamelCase (str) {
    let strArr1 = str.split("")
    for (let i = 0; i < strArr1.length; i++) {
        if (strArr1[i] == '_') strArr1[i] = '-'
    }
    let strArr2 = strArr1.join("").split("-")
    for (let i = 1; i < strArr2.length; i++) {
        let newStr = strArr2[i][0].toUpperCase()
        strArr2[i] = newStr + strArr2[i].slice(1)
    }
    return strArr2.join("")
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));