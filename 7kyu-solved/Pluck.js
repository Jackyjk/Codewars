const pluck = (objs, name) => objs.map(function (obj) { return obj[name] })

console.log(pluck([{ a: 1 }, { a: 2 }], 'a'));