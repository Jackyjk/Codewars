function digitize (n) {
    let finalArr = []
    let arr = (n + '').split``
    for (let i = 0; i < arr.length; i++) {
        finalArr.push(Number(arr[i]))
    }
    return finalArr
}

console.log(digitize(56565));
