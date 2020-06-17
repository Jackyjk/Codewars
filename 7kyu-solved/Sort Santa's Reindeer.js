let input = [
    "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
    "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
];

const sortReindeer = reindeerNames =>
    [...reindeerNames].sort((currentName, nextName) =>
        currentName.split(' ')[1].localeCompare(nextName.split(' ')[1])
    )


// function sortReindeer (reindeerNames) {
//     return reindeerNames.sort((name1, name2) => lastName(name1) > lastName(name2));
// }

// function lastName (name) {
//     return name.split(' ')[1];
// }
console.log(sortReindeer(input));