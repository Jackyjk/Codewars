function greet (name) {
    let strArr = name.split("");
    strArr[0] = strArr[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
        strArr[i] = strArr[i].toLowerCase();
    }
    return `Hello ${strArr.join('')}!`
}

console.log(greet('jack'));