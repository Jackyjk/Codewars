function validPass (password) {
    let length = password.length
    if (length < 3 || length > 20) return 'INVALID'
    if (/\W/.test(password)) return 'INVALID'
    let letters = /[a-z]/i.test(password)
    let numbers = /[0-9]/.test(password)
    if (letters && numbers) return 'VALID'
    return 'INVALID'
}
console.log(validPass('Username'));