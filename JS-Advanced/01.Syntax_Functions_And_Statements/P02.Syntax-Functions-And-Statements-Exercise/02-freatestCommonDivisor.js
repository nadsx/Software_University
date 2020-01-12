function solve(a, b) {

    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));