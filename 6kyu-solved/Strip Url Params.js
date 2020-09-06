function stripUrlParams (url, paramsToStrip = []) {
    let [host, query] = url.split`?`, params, resultQuery

    if (!query) return host

    params = query
        .split`&`
        .map(param => param.split`=`)

    resultQuery = params
        .filter((param, inx) => {
            return !params.slice(0, inx).some(prev => prev[0] == param[0])
        })
        .filter(param => !paramsToStrip.includes(param[0]))
        .map(param => param.join`=`)

    return resultQuery.length == 0 ? `${host}` : `${host}?${resultQuery.join`&`}`
}

console.log(stripUrlParams('www.codewars.com?a=1&a=2'));
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2'));
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']));