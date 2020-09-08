const camelize = str => str.split(/[^a-z0-9]/i).map(function (v) { return v.length > 0 ? v[0].toUpperCase() + v.substring(1).toLowerCase() : '' }).join('')

console.log(camelize('hello world'))
console.log(camelize('hello-world'))