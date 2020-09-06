function splitByValue (k, elements) {
    let arr1 = [], arr2 = []
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] < k) {
            arr1.push(elements[i])
        } else {
            arr2.push(elements[i])
        }
    }
    return arr1.concat(arr2)
}

console.log(splitByValue(5, [1, 3, 5, 7, 6, 4, 2]));
console.log(splitByValue(6, [6, 4, 10, 10, 6]));
console.log(splitByValue(0, [5, 2, 7, 3, 2]));