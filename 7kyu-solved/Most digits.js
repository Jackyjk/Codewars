function findLongest (array) {
    return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}
console.log(findLongest([1, 10, 100]));