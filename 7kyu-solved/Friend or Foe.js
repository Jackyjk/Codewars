function friend (friends) {
    //your code here
    let finalArr = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) finalArr.push(friends[i])
    }
    return finalArr
}

console.log(friend(["Ryan", "Kieran", "Mark"]));