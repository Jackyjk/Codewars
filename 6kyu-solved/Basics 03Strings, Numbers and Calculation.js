const calculateString = s => eval(s.replace(/[^\d+*/.()-]/g, '')).toFixed()


console.log((calculateString("sdfsd23454sdf*2342")))