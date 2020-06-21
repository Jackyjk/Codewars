const duplicateCount = text =>
    (
        text
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/([^])\1+/g) || []
    ).length


console.log(duplicateCount("aabbAcde"));
console.log(duplicateCount("Indivisibilities"));