function getStrings (city) {
    const newStr = city.replace(/\s/g, '').toLowerCase().split``;
    const strObj = {};
    for (const i of newStr) {
        if (!strObj[i]) {
            strObj[i] = i + ':';
        }
        strObj[i] += '*';
    }
    let result = [];
    for (const chatObjectKey in strObj) {
        result.push(strObj[chatObjectKey]);
    }
    return result.join`,`
}

console.log(getStrings("Las Vegas"));