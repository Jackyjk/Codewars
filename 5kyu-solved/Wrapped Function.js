function speak (name) {
    return "Hello " + name;
}
Function.prototype.wrap = function (fn) {
    var that = this
    return function (arg2, arg3) {
        return fn(that, arg2, arg3)
    }
}
speak = speak.wrap(function (original, yourName, myName) {
    greeting = original(yourName);
    return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");
