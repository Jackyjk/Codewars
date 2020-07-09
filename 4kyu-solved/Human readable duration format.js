function formatDuration (seconds) {
    if (!seconds) return "now";
    let s = seconds % 60;
    seconds = (seconds - s) / 60;
    let m = seconds % 60;
    seconds = (seconds - m) / 60;
    let h = seconds % 24;
    seconds = (seconds - h) / 24;
    let d = seconds % 365;
    seconds = (seconds - d) / 365;
    let y = seconds;

    let strout = [];
    if (y) strout.push(y + " year" + (y > 1 ? 's' : ''));
    if (d) strout.push(d + " day" + (d > 1 ? 's' : ''));
    if (h) strout.push(h + " hour" + (h > 1 ? 's' : ''));
    if (m) strout.push(m + " minute" + (m > 1 ? 's' : ''));
    if (s) strout.push(s + " second" + (s > 1 ? 's' : ''));

    return strout.join(", ").replace(/,([^,]*)$/, " and$1");
}

console.log(formatDuration(3662));