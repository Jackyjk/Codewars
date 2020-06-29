const solution = nums => nums == null ? [] : nums.sort((a, b) => a - b)

console.log(solution([1, 2, 10, 50, 5]));