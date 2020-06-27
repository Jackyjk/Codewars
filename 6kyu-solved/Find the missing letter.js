function findMissingLetter (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charCodeAt()
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + 1 != array[i + 1]) return String.fromCharCode(array[i] + 1)
    }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))