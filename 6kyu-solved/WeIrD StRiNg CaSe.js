function test (str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        i % 2 === 0 ? arr.push(str[i].toUpperCase()) : arr.push(str[i].toLowerCase())
    }
    return arr.join("")
}

function toWeirdCase (string) {
    let finalArr = []
    let strArr = string.split(" ")
    for (let i = 0; i < strArr.length; i++) {
        finalArr.push(test(strArr[i]))
    }
    return finalArr.join(" ")
}

console.log(toWeirdCase("Weird string case"))
// console.log(test("Weird"))
