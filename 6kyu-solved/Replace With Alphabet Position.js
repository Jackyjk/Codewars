function alphabetPosition (text) {
    let wordArr = text.replace(/[^a-z]+/ig, "")
    let numArr = []
    for (let i = 0; i < wordArr.length; i++) {
        numArr.push((wordArr[i].charCodeAt() - 96) > 0 ? (wordArr[i].charCodeAt() - 96) : (wordArr[i].charCodeAt() - 64))
    }
    return numArr.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))