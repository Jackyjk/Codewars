function movie (card, ticket, perc) {
    let costA = (n = 0),
        costB = card;
    while (Math.ceil(costB) >= costA) {
        costA += ticket;
        costB += ticket * Math.pow(perc, ++n);
    }
    return n;
}

console.log(movie(500, 15, 0.9));