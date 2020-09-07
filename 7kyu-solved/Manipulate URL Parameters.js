// addOrChangeUrlParameter("www.example.com", "key=value") 
// // -> 'www.example.com?key=value' (adds a parameter).

// addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// // -> 'www.example.com?key=value&key2=value2' (adds another parameter).

// addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// // ->'www.example.com?key=newValue' (changes the parameter).

/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter (url, param) {
    if (param.length === 0) return url;

    let [key, value] = param.split('=');

    if (!url.includes('?')) {
        return `${url}?${param}`;
    } else if (!url.includes(key)) {
        return `${url}&${param}`;
    } else {
        let str = new RegExp(`${key}=[^&]+`, 'g');
        return url.replace(str, param);
    }
}