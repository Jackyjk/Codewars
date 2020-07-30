partlist = arr => arr
    .map((v, i) => [arr.slice(0, i).join(" "), arr.slice(i).join(" ")])
    .slice(1);
