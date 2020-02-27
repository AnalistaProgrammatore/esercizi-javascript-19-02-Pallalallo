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

console.log(reverseArray(a))
console.log(reverseArrayInPlace(a))
**/
