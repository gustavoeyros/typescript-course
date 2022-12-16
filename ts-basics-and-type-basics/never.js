"use strict";
let value; // o tipo unknown significa que ainda o valor ainda é desconhecido, ou seja, ele aceita qualquer valor.
let peopleName;
value = 110;
value = 'Gustavo';
// peopleName = value; // aqui ele irá retornar um erro, pois, diferente do any, um unknwon possui uma verificação do tipo da variável para ser atribuído a outra.
// Podemos resolver isso da seguinte maneira:
if (typeof value === 'string') {
    peopleName = value;
    console.log(peopleName);
}
function showError(message, code) {
    throw { message: message, errorCode: code }; // irá "crashar" a função exibindo o erro
}
console.log(showError('404 not found', 404));
