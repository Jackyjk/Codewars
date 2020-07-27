// ?????
var SequenceSum = (function () {
    function SequenceSum () { }

    SequenceSum.showSequence = function (count) {
        let sum = 0
        let str = ''
        for (let i = 0; i < count; i++) {
            str += `${i}+`
            sum += i
        }
        sum += count
        if (count < 0) return `${count}<0`;
        if (count == 0) return `${count}=0`;
        return `${str}${count} = ${sum}`
    };
    return SequenceSum;
})();

var SequenceSum = (function () {
    function SequenceSum () { }

    SequenceSum.showSequence = function (count) {
        let arr = [];
        for (let i = 0; i <= count; i++) {
            arr.push(i);
        }
        let b = arr.reduce((total, next) => total + next, 0);
        let a = arr.join("+");
        if (count < 0) return `${count}<0`;
        if (count == 0) return `${count}=0`;
        return `${a} = ${b}`;
    };

    return SequenceSum;
})();
console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(21));
console.log(SequenceSum.showSequence(-2));
console.log(SequenceSum.showSequence(0));