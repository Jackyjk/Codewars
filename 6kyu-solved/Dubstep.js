const songDecoder = song => song.replace(/(WUB)+/gi, " ").trim()

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));