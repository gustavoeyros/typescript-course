"use strict";
function sum(n1, n2) {
    return n1 + n2;
}
function showResultOfSum(result) {
    console.log(`O resultado da soma é: ${result}`);
}
let showSum;
showSum = sum;
console.log(showSum(10, 10));
