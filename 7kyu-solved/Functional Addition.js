function add (n) {
    return function (m) {
        return n + m;
    };
}

console.log(add(1)(3));