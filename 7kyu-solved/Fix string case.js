function solve (s) {
    //..
    let up = 0, low = 0
    for (let i = 0; i < s.length; i++) s[i].charCodeAt() >= 97 ? low++ : up++
    return up <= low ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('Code'));
console.log(solve('CODe'));
console.log(solve('CoDe'));