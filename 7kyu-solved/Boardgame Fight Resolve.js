function fightResolve (defender, attacker) {
    let getCase = s => (s.toLowerCase() === s ? "l" : "u");
    if (getCase(defender) === getCase(attacker)) return -1;
    let fight = { a: "s", k: "a", p: "k", s: "p" },
        a = attacker.toLowerCase(),
        d = defender.toLowerCase();
    return fight[d] === a ? defender : attacker;
}


console.log(fightResolve('K', 'a'))
console.log(fightResolve('A', 'a'))