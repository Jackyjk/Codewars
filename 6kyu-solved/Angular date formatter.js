function dateFilter (date, format) {

    let parts = new Date(+date).toISOString().match(/\d+/g)

    return format.replace(/(yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s)/g, m => {
        switch (m) {
            case 'yyyy':
                return parts[0];
            case 'yy':
                return parts[0].slice(-2);
            case 'MM':
                return parts[1];
            case 'M':
                return +parts[1];
            case 'dd':
                return parts[2];
            case 'd':
                return +parts[2];
            case 'HH':
                return parts[3];
            case 'H':
                return +parts[3];
            case 'mm':
                return parts[4];
            case 'm':
                return +parts[4];
            case 'ss':
                return parts[5];
            case 's':
                return +parts[5];
        }
    });
}