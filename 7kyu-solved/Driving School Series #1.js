function passed (list) {
    let passed = 0;
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < 19) { result += list[i]; passed++ };
    }
    if (passed === 0) { return 'No pass scores registered.' };
    return Math.round(result / passed);
} 