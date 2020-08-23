function wordPattern (word) {
    let flagArr = [].concat(...new Set(word.toLowerCase().split``))
    let obj = new Map()
    for (let i = 0; i < flagArr.length; i++) {
        obj.set(flagArr[i], i)
    }
    // obj.get('h')
    let finalNum = []
    for (let i = 0; i < word.length; i++) {
        finalNum.push(obj.get(word[i].toLowerCase()))
    }
    return finalNum.join`.`
}

console.log((wordPattern("hello")))
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));