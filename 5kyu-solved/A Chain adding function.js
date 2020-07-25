const add = function (n) {
    const f = x => add(n + x);
    f.valueOf = () => n;
    return f;
}


console.log(add(1)(2) == 3);