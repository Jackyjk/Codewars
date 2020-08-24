function solve (arr) {
    //..
    const map = { Begin: "Begin", Left: "Right", Right: "Left" }
    let second = []
    for (let i = 0; i < arr.length; i++) {
        second.push(arr[i].split` on `)
    }
    // return [first,second]
    let finalArr = []
    for (let i = 0; i < arr.length; i++)
        finalArr.unshift(map[second[(i + 1) % arr.length][0]] + " on " + second[i][1]);
    return finalArr
}

console.log(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']));
console.log(solve(["Begin on Road A", "Right on Road B", "Right on Road C", "Left on Road D"]));
console.log(solve(['Begin on Road A']));