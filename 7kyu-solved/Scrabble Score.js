function scrabbleScore (str) {
    return str
        .replace(/[^a-z]/gi, "")
        .split("")
        .reduce((a, b) => a + $dict[b.toUpperCase()] * 1, 0);
}

console.log(scrabbleScore(""));
console.log(scrabbleScore("a"));
console.log(scrabbleScore("street"));