function sort1 (s) {
    s = s.replace(/[,!]/g, '').split(' ');
    let s1 = [];
    let s2 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i][0] === s[i][0].toLowerCase()) s1.push(s[i]);
        else s2.push(s[i]);
    }
    s1 = s1.sort();
    s2 = s2.sort().reverse();
    return s1.concat(s2).join(' ');
}
//as habitan he him himself his in in is of of own rights the treating I Alleghanies


function sort (s) {
    s = s.replace(/[^a-zA-Z ]/g, "").split` `;
    return s
        .filter(v => v[0] === v[0].toLowerCase())
        .sort((a, b) => a.localeCompare(b))
        .concat(
            s
                .filter(v => v[0] !== v[0].toLowerCase())
                .sort((a, b) => b.localeCompare(a))
        ).join` `;
}
console.log(sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights"));