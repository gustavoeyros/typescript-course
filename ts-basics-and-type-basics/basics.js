"use strict";
function sum(n1, n2, showResult, phrase) {
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 10;
const number2 = 5;
const printResult = true;
const resultPhrase = 'O resultado é: ';
sum(number1, number2, printResult, resultPhrase);
