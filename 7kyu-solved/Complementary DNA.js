function DNAStrand (dna) {
    //your code here
    let strArr =  dna.split("")
    for(let i=0;i<strArr.length;i++){
        if(strArr[i] == 'A') strArr[i] = 'T'
        else if(strArr[i] == 'T') strArr[i] = 'A'
        else if(strArr[i] == 'G') strArr[i] = 'C'
        else if(strArr[i] == 'C') strArr[i] = 'G'
    }
    return strArr.join("")
}

console.log(DNAStrand("ATTGC"));