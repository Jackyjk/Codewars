//! Time out
// function scramble (string1, string2) {
//     const array1 = string1.split('').sort()
//     const array2 = string2.split('').sort()
//     let x, i
//     for (x = 0, i = 0; i < array2.length && x <= array1.length; x++) {
//         if (array2[i] === array1[x]) i++
//     }

//     return x <= array1.length
// }

function scramble (str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    console.log(occurences);
    return str2.split("").every((character) => --occurences[character] >= 0);
}
