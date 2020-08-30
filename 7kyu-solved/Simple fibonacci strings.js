const solve = (n) => n === 0 ? '0' : n === 1 ? '01' : solve(n - 1) + solve(n - 2);

/**
 *
    Test.assertEquals(solve(0),'0');
    Test.assertEquals(solve(1),'01');
    Test.assertEquals(solve(2),'010');
    Test.assertEquals(solve(3),'01001');
    Test.assertEquals(solve(5),'0100101001001');
 */