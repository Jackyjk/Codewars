var Mongo = {
    isValid: function (s) {
        return /^[a-f\d]{24}$/.test(s);
    },
    getTimestamp: function (s) {
        return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
    }
}

console.log(Mongo.isValid('5f07142d7a0cb4001708fbe2'));
console.log(Mongo.getTimestamp('5f07142d7a0cb4001708fbe2'));