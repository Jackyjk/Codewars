const gimme = inputArray => [...inputArray].indexOf(inputArray.sort((a, b) => a - b)[1]);

// Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
// Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')