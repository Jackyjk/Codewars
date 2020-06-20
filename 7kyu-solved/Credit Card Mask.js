// return masked string
const maskify = cc => cc.length <= 4 ? cc : `${'#'.repeat(cc.length - 4)}${cc.split("")[cc.length - 4]}${cc.split("")[cc.length - 3]}${cc.split("")[cc.length - 2]}${cc.split("")[cc.length - 1]}`

console.log(maskify('4556364607935616'));
console.log(maskify('16'));