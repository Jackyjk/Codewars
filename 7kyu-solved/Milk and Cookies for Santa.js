const timeForMilkAndCookies = date => date.getDate() === 24 && date.getMonth() === 11;

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
