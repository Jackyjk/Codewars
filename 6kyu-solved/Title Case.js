String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase (title, minorWords) {
    if (title.length === 0) return title;
    let words = title.toLowerCase().split` `
    let minorWordsArray = minorWords ? minorWords.toLowerCase().split` ` : [];
    return words.map(function (word, index) {
        if (minorWordsArray.indexOf(word) !== -1 && index != 0) {
            return word;
        }
        return word.capitalize()
    }).join` `
}


console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('', ''))

// console.log(typeof toLow("asdSsd ad ads daA "));