function solve (str, k) {
    let len = str.length - k
    let arr = []
    for (let i = 0; i < str.length; i++)
        arr.push(str.slice(i, len + i))
    return Math.max(...arr)
}


/*
Test.assertEquals(solve('123',1) ,23);
Test.assertEquals(solve('1234',1),234);
Test.assertEquals(solve('1234',2),34);
Test.assertEquals(solve('1234',3),4);
*/