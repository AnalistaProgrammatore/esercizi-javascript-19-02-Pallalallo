/**
function FibonacciRic(x) {
    if (x < 0) return false
    if (x === 0 || x === 1) return 1
    else return FibonacciRic(x - 1) + FibonacciRic(x - 2)
}
console.log(FibonacciRic(5))
**/
