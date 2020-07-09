
/**
 *
 * input the word
 * @param {*} word
 */
/**
 *
 *
 * @param {*} a  the letter of word
 * @param {*} i  index
 * @param {*} w  word
 * @returns
*/
duplicateEncode = (word) => word.toLowerCase().split('')
    .map(function (a, i, w) {
        // only find once -> '(' 
        // if more -> ')'
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    }).join('')

console.log(duplicateEncode("Success"))//")())())"