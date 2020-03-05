/**
var obj1 = {
    a: 2,
    z: 3,
    m: {
        l: 4, n: { q: null, w: 6, },
    },
    b: {
        c: 3,
    },
    h: { u: 2, f: 3, },
}
var obj2 = {
    a: 2,
    z: 3,
    m: {
        l: 4, n: { q: undefined, w: 6, },
    },
    b: {
        c: 3,
    },
    h: { u: 2, f: 3, d: 4 },
}
function deepC(obj1, obj2) {
    //ritorna true se entrambi sono null o undefined e false altrimenti
    if ((obj1 == (undefined || null)) || (obj2 == (undefined || null))) {
        if ((obj1 == (undefined || null)) && (obj2 == (undefined || null))) return true;
        else return false
    }

    //per ogni chiave k1 di obj1 controlla se i valori sono uguali o se sono oggetti uguali con la chiamata ricorsiva
    else if (((typeof obj1) === 'object') && ((typeof obj2) === 'object')) {
        if(Object.keys(obj1).length!=Object.keys(obj2).length) return false
        for (var k1 in obj1) {
            o = deepC(obj1[k1], obj2[k1]);
            if (!o) return false;
        }
        return true;
    }
    //controlla se i valori obj1 e obj2 richiamati dalla ricorsione sono uguali
    else {
        if (typeof obj1 == typeof obj2) {
            if (obj1 == obj2) {

                for (var k2 in obj1) {
                    if (obj1[k2] === obj2[k2]) deepC(obj1[k2], obj2[k2])
                    else return false
                }
                return true
            }
            else {
                return false
            }
        }
        else return false;

    }
}
console.log(deepC(obj1, obj2));
**/
