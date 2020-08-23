// let a = 12
// let b = 23
// console.log(`0 : ${a.toString(2)},${b.toString(2)}`);
// a ^= b
// console.log(`1 : ${a.toString(2)},${b.toString(2)}`);
// b ^= a
// console.log(`2 : ${a.toString(2)},${b.toString(2)}`);
// a ^= b
// console.log(`3 : ${a.toString(2)},${b.toString(2)}`);


console.log("(1)该行结果为：" + a); //①     // function a () { //⑥ console.log(4);}
var a = 3; //②
console.log("(2)该行结果为：" + a); //③     // 3
function a () { //④
    console.log(2);
}
var a = 6; //⑤
function a () { //⑥
    console.log(4);
}
console.log("(3)该行结果为：" + a); //⑦     // 6

var a = 'test'
function fn () {
    console.log(`inside: ${a}`);        //inside: undefined
    var a = 'aaa'
}
fn()
console.log(`outside: ${a}`);       //outside: test
var a = 012
var b = 0x12
console.log(a);     //10
console.log(b);     //18

var q1 = "asddas'ads'"
var q2 = 'asdsdasdasd"asdas"'
console.log(q1);        //asddas'ads'
console.log(q2);        //asdsdasdasd"asdas"

var qq = 10111
console.log(Number(qq));        //10111
console.log(Number(`0${qq}`));  //10111
console.log(Number(`0x${qq}`)); //65809


var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = num => console.log(parse_number.test(num));

test('1');             // true
test('number');        // false
test('98.6');          // true
test('132.21.86.100'); // false
test('123.45E-67');    // true
test('123.45D-67');    // false