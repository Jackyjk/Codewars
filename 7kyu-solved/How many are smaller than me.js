const smaller = nums => nums.map((e, i) => nums.slice(i).filter(x => e > x).length)

console.log(smaller([5, 4, 3, 2, 1]));
