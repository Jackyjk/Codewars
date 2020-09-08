var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function (phrase) {
    this.phrase = phrase;
};

MyNamespace.MyClass.prototype.sayHello = function () {
    return this.phrase;
};