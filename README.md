# EserciziJavascript 1902

## MODALITA DI SVOLGIMENTO
Gli esercizi 1, 2 sono da svolgere carta e penna, la consegna deve essere effettuata tramite foto o scannerizzazione del o dei fogli prodotti per gli esercizi.

### ESERCIZI

1. Scrivere nel file `fibonacci.js` la funzione ricorsiva di calcolo della serie di fibonacci per n = 30 https://it.wikipedia.org/wiki/Successione_di_Fibonacci e descrivere lo Stack di chiamate ricorsive (per lo stack potete calcolare la successione ad un numero minore di 30 a vostra scelta **purchè nello stack compaiano almeno 4 chiamate ricorsive**)

2. Scrivere nel file `mcd.js` la funzione `mcd(x, y)` e `mcdRecursive(x, y)` che implementi l'algoritmo di Euclide per il calcolo del massimo comun divisore tra due numeri. Per la funzione `mcdRecursive(x, y)` descrivere lo stack di chiamate ricorsive (per lo stack potete calcolare la successione ad un numero minore di 30 a vostra scelta **purchè nello stack compaiano almeno 4 chiamate ricorsive**)

3. Si descriva lo stack del seguente programma
```
let z = 0
const opGenerator = function(symbol) {
  switch(symbol) {
    case '+':
      return (x, y) => x + y + z; 
    case '-':
      return (x, y) => x - y + z;
    case '*':
      return (x, y) => x * y + z;
    case '/':
      return (x, y) => x / y + z;
  }
}

const calculator = function(symbol, x, y) {
  const operation = opGenerator(symbol)
  return operation(x, y, z)
}

if(true) {
  let z = 3 
  if(true) {
    let z = 10
    let result = calculator('+', 12, 13)
  }
}
```

4. Svolgere nel file `range.js` l'esercizio 1 del capitolo 4 di eloquentJs "Sum of a range"

5. Svolgere nel file `reverse.js` l'esercizio 2 del capitolo 4 di eloquentJs "Reverse an array". Sviluppare l'esercizio nella versione "Imperativa" cioè "Coma fare" e nella versione "Dichiarativa" cioè "Cosa fare" (tips: utilizzare la destrutturazione e lo spread operator per la versione "Dichiarativa". **NB le funzioni implementate devono essere pure**

5. Svolgere nel file `list.js` l'esercizio 3 del capitolo 4 di eloquentJS "A list"

6. (opzionale solo per i più temerari) Svolgere nel file `deep.js` l'esercizio 5 di eloquenteJs "Deep Comparision"  

