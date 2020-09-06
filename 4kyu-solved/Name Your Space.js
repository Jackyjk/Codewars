function namespace (root, path, value) {
    let paths = path.split('.')
    for (let p of paths.slice(0, paths.length - 1)) {
        if (!root[p]) root[p] = {}
        root = root[p]
    }
    if (value)
        root[paths[paths.length - 1]] = value
}

var stuff = {}
console.log(namespace(stuff, 'moreStuff.name', 'the stuff'));