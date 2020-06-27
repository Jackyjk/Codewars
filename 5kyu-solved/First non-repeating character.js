// function firstNonRepeatingLetter (s) {
//     let index = s
//         .toLowerCase()
//         .split("")
//         .findIndex(
//             letter =>
//                 s
//                     .toLowerCase()
//                     .split("")
//                     .filter(l => l === letter).length === 1
//         )

//     return index === -1 ? "" : s[index]
// }


function firstNonRepeatingLetter (s) {
    for (var i in s) {
        if (s.match(new RegExp(s[i], "gi")).length === 1) {
            return s[i];
        }
    }
    return '';
}

// function firstNonRepeatingLetter (s) {
//     var t = s.toLowerCase();
//     for (var x = 0; x < t.length; x++)
//         if (t.indexOf(t[x]) === t.lastIndexOf(t[x]))
//             return s[x];
//     return "";
// }

// console.log(firstNonRepeatingLetter('a'))
console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter('moomen'))