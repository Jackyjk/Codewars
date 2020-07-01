function maxProduct (a) {
    var biggest = Math.max.apply(Math, a);
    a.splice(a.indexOf(biggest), 1);
    return biggest * Math.max.apply(Math, a);
}
console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]));
