/**
function arrayToList(array) {
    let aList = null;
    for (let i = array.length - 1; i >= 0; i--) {
        aList = { value: array[i], rest: aList }
    }
    return aList
}
function listToArray(list) {
    let a = [];
    i = 0;
    while (list != null) {
        a[i] = list.value;
        i++;
        list = list.rest;
    }
    return a;
}
function prepend(list, FirstEl) {
    let newList = { value: FirstEl, rest: list }
    return newList
}

function nth(list, Elem) {
    let i = 0;
    while (list.rest != null) {
        if (Elem === i) return list.value
        i++
        list = list.rest;
    }
    if (!list) return undefined
}

function nthRic(list, Elem) {
    if (!list) return undefined
    else if (Elem == 0) return list.value
    else return nthRic(list.rest, Elem - 1)
}
**/
