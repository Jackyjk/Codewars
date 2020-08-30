function solve (s, k) {
    let count = 0;
    let arr = s.split(' ')
    for (let i = 0; i < arr.length; ++i)
        for (let j = 0; j < arr.length; ++j)
            if (i != j && Number(arr[i] + arr[j]) % k == 0)
                count++;
    return count;
}

