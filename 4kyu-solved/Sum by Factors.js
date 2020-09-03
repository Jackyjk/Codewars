function sumOfDivided (list) {
    if (list.length == 0) { return []; }
    // 最大数字为基础  数组预长度
    var m = Math.max.apply(null, list.map(Math.abs)),
        list_of_primes = [],
        marked = Array(m + 1); // 标记数组

    for (var i = 2; i <= m; ++i) {

        if (marked[i]) continue;

        var sum = 0, isMul = false;
        // 循环 标记数组
        list.forEach(n => { if (n % i == 0) { sum += n; isMul = true; } });
        if (isMul) list_of_primes.push([i, sum]);
        // 以i 为倍数，将数组中所对应的角标数字进行标记 
        // 例如2， 标记 4，6，8，10，12，14。
        // 3 ： 6，9，12，15
        // 5 ： 5，10，15

        //   当i等于2的时候， 12%2==0，[2，12]
        //   当i等于3的时候， 12%3==0，[3，12]
        //   当i等于3的时候， 15%3==0，[3，12+15]  =>  [3,27]
        //   当i等于4的时候， 12%4==0，但已经标记，跳过
        //   当i等于5的时候， 15%5==0，[5，15]  =>  [5，15]

        //同理推理剩下的数据   最终得到结果[[2,12],[3,27],[5,15]]
        for (var j = 2 * i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return list_of_primes;
}

console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([15, 30, -45]));
console.log(sumOfDivided([15, 21, 24, 30, 45]));