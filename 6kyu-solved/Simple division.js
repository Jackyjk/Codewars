function solve (a, b) {
    let c = 2;
    while (b != 1) {
        if (b % c == 0) {
            if (a % c != 0)
                return false;
            b /= c;
            c = 2
        }
        else
            c++;
    }
    return true
}

/*
Test.assertEquals(solve(2,256),true);
Test.assertEquals(solve(2,253),false);
Test.assertEquals(solve(9,243),true);
Test.assertEquals(solve(15,12),false);
*/