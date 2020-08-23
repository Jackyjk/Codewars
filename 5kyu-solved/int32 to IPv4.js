// number:传入的字符串
// grap:间隔的位数
function changeNumber (number, grap) {
    let arr = [];
    let count = 0;
    for (let i = 0, len = number.length / grap; i < len; i++) {
        let str1 = number.substr(0, grap);
        number = number.replace(str1, '');
        arr.push(str1)
    }
    // console.log(arr);
    return arr.join(' ')
}

function int32ToIp (int32) {
    if (int32 === 0) return '0.0.0.0'
    //...
    let arr = changeNumber(int32.toString(2), 8).split` `
    return `${parseInt(Number(arr[0]), 2)}.${parseInt(Number(arr[1]), 2)}.${parseInt(Number(arr[2]), 2)}.${parseInt(Number(arr[3]), 2)}`
}

console.log(int32ToIp(2149583361));
console.log(int32ToIp(2154959208));
console.log(int32ToIp(0));


function int32ToIp (int32) {
    //int32  2154959208
    return (
        ((int32 >> 24) & 0xFF) + "." +
        ((int32 >> 16) & 0xFF) + "." +
        ((int32 >> 8) & 0xFF) + "." +
        ((int32) & 0xFF)
    );

}