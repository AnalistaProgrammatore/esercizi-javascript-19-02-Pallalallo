/**
function stepRange(n1, n2, s) {
    let a = [];
    if (s === 0) {
        return a.concat(n1, n2)
    }
    if (s > 0) {
        for (i = n1; i <= n2; i += s) {
            a = a.concat(i)
        }
    }
    else {
        for (i = n1; i >= n2; i += s) {
            console.log('ciao')
            a = a.concat(i)
        }
    }
    return a;
}


function range(n1, n2) {
    let a = [], m = n1;
    for (i = 0; i <= n2 - n1; i++) {
        a[i] = m;
        m++
    }
    return a;
}

function sum(a) {
    let current = 0;
    for (let add of a) {
        current += add;
    }
    return current;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(stepRange(75, 2, 0))
**/
