function justNames (array) {
    return array.map(function (e) { return e.name });
}

var naughty = [
    { name: 'xDranik', wasNice: false }
];
var nice = [
    { name: 'Santa', wasNice: true },
    { name: 'Warrior reading this kata', wasNice: true }
];

function getNiceNames (people) {
    let arr = []
    for (let i = 0; i < people.length; i++) {
        if (people[i].wasNice == true) {
            arr.push(people[i].name)
        }
    }
    return arr
}

function getNaughtyNames (people) {
    let arr = []
    for (let i = 0; i < people.length; i++) {
        if (!people[i].wasNice == true) {
            arr.push(people[i].name)
        }
    }
    return arr
}

console.log(getNiceNames(naughty));
console.log(getNiceNames(nice));