"use strict";
function sum(n1, n2) {
    return n1 + n2;
}
function showResultOfSum(result) {
    console.log(`O resultado da soma é: ${result}`);
}
// let showSum: Function; // isso diz que essa variável pode receber apenas funções.
let showSum; // isso torna a variável ainda mais específica, ela só aceita função que tenha 2 parâmetros e com um retorno de um número.
// showSum = showResultOfSum; // aqui irá apontar o erro dizendo que essa função escolhida só recebe 1 parâmetro e é um retorno vazio.
showSum = sum;
console.log(showSum(10, 10));
