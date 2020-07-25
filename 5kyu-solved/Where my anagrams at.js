function anagrams (word, words) {
    let mine = word.split("").sort().join("")
    let finalArr = []
    for (let i = 0; i < words.length; i++) {
        let wordStr = words[i].split``.sort().join``
        if (mine === wordStr) finalArr.push(words[i])
    }
    return finalArr.sort()
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']))

//* other
String.prototype.sort = function () {
    return this.split("").sort().join("");
};

function anagrams (word, words) {
    return words.filter(function (x) {
        return x.sort() === word.sort();
    });
}