let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

function whoIsNext (names, r) {
    while (r > names.length) r = Math.floor((r - names.length + 1) / 2);
    return names[r - 1];
}

console.log(whoIsNext(names, 1));
console.log(whoIsNext(names, 52));
console.log(whoIsNext(names, 7230702951));