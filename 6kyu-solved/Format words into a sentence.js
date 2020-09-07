function formatWords (words) {
    if (!words || words.length === 0) {
        return ''
    }
    words = words.filter(function (word) {
        return word.length
    })
    if (words.length == 0) {
        return ''
    }
    else if (words.length == 1) {
        return words[0]
    } else {
        return [words.slice(0, words.length - 1).join`, `, words.slice(words.length - 1)[0]].join` and `
    }
}

console.log(formatWords(['ninja', 'samurai', 'ronin'])) // should return "ninja, samurai and ronin"
console.log(formatWords(['ninja', '', 'ronin'])) // should return "ninja and ronin"
console.log(formatWords([])) // should return ""
console.log(formatWords(['one', 'two', 'three', 'four']));