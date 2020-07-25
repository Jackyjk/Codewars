function mostFrequentDays (year) {
    const weekDays = {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
        Sunday: 0
    };
    let date = new Date(year, 0, 0).getTime() + 1;
    for (let i = 0; ; i++) {
        date += 1000 * 60 * 60 * 24;
        if (new Date(date).getFullYear() > year) {
            break;
        }
        if (new Date(date).getDay() === 0) weekDays.Sunday++;
        if (new Date(date).getDay() === 1) weekDays.Monday++;
        if (new Date(date).getDay() === 2) weekDays.Tuesday++;
        if (new Date(date).getDay() === 3) weekDays.Wednesday++;
        if (new Date(date).getDay() === 4) weekDays.Thursday++;
        if (new Date(date).getDay() === 5) weekDays.Friday++;
        if (new Date(date).getDay() === 6) weekDays.Saturday++;
    }
    const max = Math.max(...Object.values(weekDays));
    return [].concat(
        Object.entries(weekDays)
            .filter(v => v[1] === max)
            .map(v => v[0])
    );
}

console.log(mostFrequentDays(1770));