function inArray (array1, array2) {
    return array1.filter(x => array2.some(y => y.includes(x))).sort();
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));