const crypto = require('crypto');
function passwordCracker (hash) {
    const letters = " abcdefghijklmnopqrstuvwxyz".split(""), l = letters.length;
    for (let i = 0; i < l; i++) {
        for (let i2 = 0; i2 < l; i2++) {
            for (let i3 = 0; i3 < l; i3++) {
                for (let i4 = 0; i4 < l; i4++) {
                    for (let i5 = 0; i5 < l; i5++) {
                        let s = (letters[i] + letters[i2] + letters[i3] + letters[i4] + letters[i5]).trim();
                        if (crypto.createHash('sha1').update(s).digest("hex") === hash)
                            return s;
                    }
                }
            }
        }
    }
}