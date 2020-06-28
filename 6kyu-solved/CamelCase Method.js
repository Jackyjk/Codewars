String.prototype.camelCase = function () {
    //your code here
    let strArr = this.split(" ")
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join("")
}

console.log("hello case".camelCase())