function wordValue (a) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        newArr[i] = a[i].split('').reduce((s, v) => {
            return s += v == ' ' ? 0 : (v.charCodeAt(0) - 96);
        }, 0);
        newArr[i] *= i + 1;
    }
    return newArr;
}

console.log(wordValue(["abc"]));
console.log(wordValue(["codewars", "abc", "xyz"]));
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]));