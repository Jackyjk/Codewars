// Array.prototype.square = () => this.map(v => v * v)
// Array.prototype.cube = () => this.map(v => v * v * v)
// Array.prototype.sum = () => this.reduce((a, b) => a + b, 0)
// Array.prototype.average = () => this.reduce((a, b) => a + b, 0) / this.length
// Array.prototype.even = () => this.filter(v => v % 2 == 0)
// Array.prototype.odd = () => this.filter(v => v % 2 !== 0)

Array.prototype.square = function () {
    return this.map(v => v * v);
};
Array.prototype.cube = function () {
    return this.map(v => v * v * v);
};
Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};
Array.prototype.average = function () {
    return this.reduce((a, b) => a + b, 0) / this.length;
};
Array.prototype.even = function () {
    return this.filter(v => v % 2 == 0);
};
Array.prototype.odd = function () {
    return this.filter(v => v % 2 !== 0);
};


var numbers = [1, 2, 3, 4, 5];
// Test.assertSimilar(numbers.square(), [1, 4, 9, 16, 25]);
// Test.assertSimilar(numbers.cube(), [1, 8, 27, 64, 125]);
// Test.assertEquals(numbers.sum(), 15, 'Wrong sum');
// Test.assertEquals(numbers.average(), 3, 'Wrong average');
// Test.assertSimilar(numbers.even(), [2, 4], 'Wrong result for even()');
// Test.assertSimilar(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');

Object.assign(Array.prototype, {
    square () { return this.map(n => n * n); },
    cube () { return this.map(n => Math.pow(n, 3)); },
    sum () { return this.reduce((p, n) => p + n, 0); },
    average () { return this.reduce((p, n) => p + n, 0) / this.length; },
    even () { return this.filter(n => !(n % 2)); },
    odd () { return this.filter(n => n % 2); }
});