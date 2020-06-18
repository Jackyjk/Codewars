var splitInParts = function (s, partLength) {
    // Good Luck!
    let finalArr = []
    for (let i = 0; i < s.length; i += partLength) {
        finalArr.push(s.slice(i, i + partLength))
    }
    return finalArr.join(" ")
}
console.log(splitInParts("supercalifragilisticexpialidocious", 3));