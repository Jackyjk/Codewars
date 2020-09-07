const sortme = courses => courses.sort(function (a, b) {
    a = a.split('-');
    b = b.split('-');

    return a[1] < b[1] ? -1
        : a[1] > b[1] ? 1
            : a[0].localeCompare(b[0]);
})