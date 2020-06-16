function hexStringToRGB (str) {
    if (str.length === 4) {
        return {
            "r": parseInt(str[1], 16) * 16 + parseInt(str[1], 16),
            "g": parseInt(str[2], 16) * 16 + parseInt(str[2], 16),
            "b": parseInt(str[3], 16) * 16 + parseInt(str[3], 16)
        }
    }
    else {
        return {
            "r": parseInt(str[1], 16) * 16 + parseInt(str[2], 16),
            "g": parseInt(str[3], 16) * 16 + parseInt(str[4], 16),
            "b": parseInt(str[5], 16) * 16 + parseInt(str[6], 16)
        }
    }
}

function hexStringToRGB (h) {
    return {
        r: parseInt(h.slice(1, 3), 16),
        g: parseInt(h.slice(3, 5), 16),
        b: parseInt(h.slice(5, 7), 16)
    };
}

console.log(hexStringToRGB("#FF9933"));     //{r:255, g:153, b:51}
console.log(hexStringToRGB("#F93"));     //{r:255, g:153, b:51}