const addLetters = (...letters) => {
    const charCode = letters.reduce((acc, char) => acc + char.charCodeAt() - 96, 0) % 26 || 26
    return String.fromCharCode(charCode + 96)
}

console.log(addLetters('a', 'b', 'c'));
console.log(addLetters('a', 'b'));
console.log(addLetters('y', 'b', 'c'));
console.log(addLetters());