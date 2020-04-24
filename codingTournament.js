function findFirstRepeated(inputString) {
    let len = inputString.length;
    let repeated = '';
    for (let i = 1; i < len/2; i ++) {
        let first = inputString.slice(0,i);
        let second = inputString.slice(i);
        if (second.includes(first)) {
            repeated = first;
        }
    }
    if (repeated.length == 1) {
        return '';
    } else {
        return repeated;
    }
}

let s = "abcbab";
console.log(findFirstRepeated(s));
