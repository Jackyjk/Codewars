// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.

describe("Solution", function () {
    it("should test for something", function () {
        // Test.assertEquals(1 + 1, 2);
        // assert.strictEqual(1 + 1, 2);
    });
});
function randomString () {
    let len = (Math.random() * 20).toFixed()
    let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let maxPos = $chars.length
    let str = ''
    for (i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return str
}

Test.assertEquals('abcd'.capitalize(), 'Abcd');
Test.assertEquals(''.capitalize(), '');
//This is random Cases
describe("Solution", function () {
    it("should test for random cases", function () {
        for (let i = 0; i < 100; i++) {
            var str = randomString()
            Test.assertEquals(str.capitalize(), str.capitalize());
        }
    });
});