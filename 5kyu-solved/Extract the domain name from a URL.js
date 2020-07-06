const domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];


console.log(domainName("https://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://google.com"));
console.log(domainName("www.baidu.com"));
console.log(domainName("www.xakep.ru"));