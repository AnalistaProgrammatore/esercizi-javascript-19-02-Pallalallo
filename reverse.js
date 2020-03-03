/**
let a = [1, 2, 3, 4, 5];
function reverseArrayInPlace(a) {
    for (i = 0; i <= (a.length - 1) / 2; i++) {
        s = a[i];
        a[i] = a[a.length - i - 1];
        a[a.length - i - 1] = s;
    }
    return a;
}
function reverseArray(a) {
    let b = [];
    for (let i in a) {
        b[i] = a[a.length - i - 1]
    }
    return b;
}
function reverseArrayDec(a) {
    const y = (k, b) => a[a.length - b - 1]
    a = a.map(y)
    return a
}


console.log(reverseArray(a))
console.log(reverseArrayInPlace(a))
**/
