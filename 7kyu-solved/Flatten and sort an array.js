const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b);

// Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
