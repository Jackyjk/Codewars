// function dayAndTime (n) {
//     let days = "Sun Mon Tues Wednes Thurs Fri Satur".split(" ").map(e => e + "day");
//     let mod = m => ((n % m) + m) % m,
//         pad = m => ("0" + m).slice(-2);
//     return (
//         days[(mod(10080) / 1440) | 0] +
//         " " +
//         pad((mod(1440) / 60) | 0) +
//         ":" +
//         pad(mod(60) | 0)
//     );
// }

const dayAndTime = minutes => {
    var date = new Date(0, 0, 0),
        daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date.setTime(date.getTime() + minutes * 60 * 1000);
    return `${daysOfWeek[date.getDay()]} ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
}

const formatNumber = number => (number < 10 ? "0" : "") + number;

console.log(dayAndTime(45));