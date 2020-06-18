function solution (string) {
    string = [].concat(...string)
    let newStr = []
    for (let i = 0; i < string.length; i++) {
        string[i].charCodeAt() >= 97 ? newStr.push(string[i]) : newStr.push(`,${string[i]}`)
    }
    return newStr.join("").split(",").join(" ")
}

const solution1 = string => string.replace(/([A-Z])/g, ' $1')

console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'));
console.log(solution1('camelCasingTest'));