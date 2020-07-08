function solve (s) {
    let num = 0;
    for (let i = 0; i <= s.length / 2; i++) {
        num = s.substring(0, i) == s.substring(s.length - i) ? i : num;
    }
    return num;
}

console.log(solve("abcdabc"));
console.log(solve("abcd"));