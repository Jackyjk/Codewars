function isValidIP (str) {
    let regpx = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/
    return regpx.test(str)
}

console.log(isValidIP('abc.def.ghi.jkl'));
console.log(isValidIP('01.02.03.04'));
console.log(isValidIP('128.63.32.63'));