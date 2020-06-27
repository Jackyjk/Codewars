var capitals = function (word) {
    // Write your code here
    let strArr = word.split("")
    let arr = []
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].charCodeAt() < 97) {
            arr.push(i)
        }
    }
    return arr
};

console.log(capitals('CodEWaRs'))
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );