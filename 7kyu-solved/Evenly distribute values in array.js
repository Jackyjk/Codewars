const distributeEvenly = (array) => {
    // 
    let finalArr = []
    let one = 0, two = 0, three = 0, four = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'one') one++
        else if (array[i] == 'two') two++
        else if (array[i] == 'three') three++
        else if (array[i] == 'four') four++
    }
    flag = true
    while (flag) {
        if (one) {
            finalArr.push("one")
            one--
        }
        if (two) {
            finalArr.push("two")
            two--
        }
        if (three) {
            finalArr.push("three")
            three--
        }
        if (four) {
            finalArr.push("four")
            four--
        }
        flag = (one == 0 && two == 0 && three == 0 && four == 0) ? false : true
    }
    return finalArr
};

console.log(distributeEvenly(['one', 'one', 'two', 'two', 'three', 'three', 'four', 'one']));