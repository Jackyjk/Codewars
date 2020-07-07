var wordWrap = function (str) {
    if (str.length <= 25) return str;
    return (str[24] === ' ' || str[25] === ' ')
        ? str.slice(0, 25) + '\n' + wordWrap(str.slice(25))
        : str.slice(0, 24) + '-\n' + wordWrap(str.slice(24));
};

var input = "The quick brown fox jumped over the lazy developer.";
console.log(wordWrap(input));