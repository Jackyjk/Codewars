//* still has some question

const getDate = (uts, loc) => new Date(uts * 1000).toLocaleDateString(loc)
console.log(getDate(1481020142, 'en-GB'));
console.log(getDate(1481020142, "ko-KR"));
console.log(getDate(1481020142, 'de-DE'));

// function getDate (uts, loc) {
//     let date = new Date(uts * 1000).toLocaleDateString(loc)
//     return date
// }