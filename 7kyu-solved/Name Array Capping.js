function capMe (names) {
    return names.map(
        value => value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1)
    );
}

console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));