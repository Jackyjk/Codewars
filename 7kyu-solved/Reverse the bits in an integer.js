var reverseBits = n => parseInt(([].concat(...n.toString(2)).reverse().join("")), 2)


console.log(reverseBits(417));