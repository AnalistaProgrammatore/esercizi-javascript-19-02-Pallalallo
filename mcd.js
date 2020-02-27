/**
let x = 13, y = 0;
function mcdRic(x, y) {
    if (y === 0) return x
    if ((x % y) === 0) {
        return y;
    }
    else {
        console.log('si')
        return (mcdRic(y, (x % y)))
    }
}

function mcd(x, y) {
    if (y === 0) return x
    while (x % y != 0) {
        c = x;
        x = y;
        y = c % y;
    }
    return y;
}

console.log(mcd(x, y));
console.log(mcdRic(x, y));

**/
