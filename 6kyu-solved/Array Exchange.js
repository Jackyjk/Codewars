const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];
function exchangeWith (a, b) {
    const temp1 = a.slice().reverse()
    const temp2 = b.slice().reverse()
    while (a.length) {
        a.shift()
    }
    while (b.length) {
        b.shift()
    }
    for (let i of temp2) {
        a.push(i)
    }
    for (let i of temp1) {
        b.push(i)
    }
}
console.log(myArray);
console.log(otherArray);