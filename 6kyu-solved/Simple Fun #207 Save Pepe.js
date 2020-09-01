function savePepe (hash) {
    let message = [0];
    for (let i = 0; i < hash.length; i++)
        message.push(129 * (hash[i] ^ message[i]) % 256);
    return String.fromCharCode(...message.slice(1));
}

console.log(savePepe([241, 134, 146, 23, 6, 141, 140, 156, 134, 31, 145, 146, 23, 2, 129, 15]))