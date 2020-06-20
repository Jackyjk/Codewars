function getCount (str) {
    var vowelsCount = 0;

    // enter your majic here
    let arr = [].concat(...str)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
            vowelsCount++
        }
    }
    return vowelsCount;
}

console.log(getCount("abracadabra"))