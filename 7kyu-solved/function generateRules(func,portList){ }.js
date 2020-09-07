function generateRules (func, x) {
    let s = ''
    for (let i = 0; i < x.length; ++i)
        s += `iptables -I INPUT -p tcp --dport ${x[i]} -j ACCEPT ;`;
    return s
}