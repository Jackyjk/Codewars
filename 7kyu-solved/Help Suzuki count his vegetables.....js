function countVegetables (string) {
    const dict = [
        "cabbage",
        "carrot",
        "celery",
        "cucumber",
        "mushroom",
        "onion",
        "pepper",
        "potato",
        "tofu",
        "turnip"
    ];
    const arr = []
        .concat(string.split(" "))
        .map(v => v.replace(/\n$/g, ""))
        .filter(v => v.length && dict.includes(v));
    let obj = {};
    arr.map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const answ = [];
    keys.map((v, i) => answ.push([values[i], v]));
    return answ.sort((a, b) => {
        if (a[0] < b[0]) {
            return 1;
        }
        if (a[0] > b[0]) {
            return -1;
        }
        if (a[0] === b[0]) {
            return b[1].localeCompare(a[1]);
        }
    });
}