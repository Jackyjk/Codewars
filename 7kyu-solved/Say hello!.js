function greet (name) {
    // console.log(typeof name);
    return (name == null  || name =='') ? null: `hello ${name}!`
}

console.log(greet("Niks"));
console.log(greet(""));