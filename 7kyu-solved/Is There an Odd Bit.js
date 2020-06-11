function anyOdd (x) {
    return x.toString(2).split``.reverse().filter((v, i) => i % 2).some(v => v == '1') ? 1 : 0
}

console.log(anyOdd(2863311530));//10101010101010101010101010101010  1
console.log(anyOdd(128));//10000000  1
console.log(anyOdd(131));//10000011  1
console.log(anyOdd(2));//10  1
console.log(anyOdd(24082));//101111000010010  1
console.log(anyOdd(0));  //0  0
console.log(anyOdd(85));//1010101  0
console.log(anyOdd(1024));//10000000000   0
console.log(anyOdd(1));//1 0
console.log(anyOdd(1365));//10101010101 0
