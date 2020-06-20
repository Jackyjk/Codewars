function findOdd (A) {
    let count = {};
    A.forEach(v => {
        count[v] = count[v] ? count[v] + 1 : 1;
    });
    return +Object.keys(count).find(key => count[key] % 2 === 1);
}