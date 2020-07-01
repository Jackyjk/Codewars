function choreAssignment (chores) {
    return chores
        .sort((a, b) => a - b)
        .map((cur, idx) => cur + chores[chores.length - idx - 1])
        .splice(chores.length / 2, chores.length / 2)
        .sort((a, b) => a - b);
}