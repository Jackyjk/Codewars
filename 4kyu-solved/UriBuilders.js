let UriBuilder = function (uri) {
    let parts = uri.split('?')
    //解析出主机名 和 参数
    this.host = parts.shift()
    this.params = parts.shift().split('&').reduce(function (acc, param) {
        // 获取参数 例如 id=1  parts获得id，acc获得1
        let parts = param.split('=')
        acc[parts[0]] = parts[1]
        //返回 内部参数
        return acc
    }, {})
}

UriBuilder.prototype.build = function () {
    // 获取对象属性名
    let params = Object.getOwnPropertyNames(this.params).map(function (name) {
        return name + '=' + String.prototype.replace.call(this.params[name], /\s/g, '%20')
    }.bind(this)).join('&')

    return this.host + (params.length ? '?' + params : '')
}