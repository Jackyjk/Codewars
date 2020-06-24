const smileArr = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];
//return the total number of smiling faces in the array
function countSmileys (arr) {
    if (arr.length === 0) return 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (smileArr.includes(arr[i])) count++
    }
    return count
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']))       //4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));  //2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //1

// const countSmileys = arr => arr.filter(v => v.match(/(:|;)(-|~)?(\)|D)/)).length;