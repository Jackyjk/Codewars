let _ = require('moment')
function getDate (uts, loc) {
    return _(uts * 1000).format(formats[loc].toUpperCase())
}
console.log(getDate(1481020142, 'en-GB'));
console.log(getDate(1481020142, "ko-KR"));
console.log(getDate(1481020142, 'de-DE'));

// function getDate (uts, loc) {
//     let date = new Date(uts * 1000).toLocaleDateString(loc)
//     return date
// }