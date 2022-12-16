"use strict";
/*     function combine
    (
        value1: number | string,  // ( | ) significa "Union Types", podemos definir que aquele parâmetro pode receber mais de um tipo de dado.
        value2: number | string,
        typeConv:'isNumber' | 'isText' // Esse é o literal types, com ele, podemos definir o valor que o parâmetro deve ter.
    ){
        if(typeof value1 === 'number' && typeof value2 === 'number' || typeConv === 'isNumber'){
            return +value1 + +value2;
        } else{
            return value1.toString() + value2.toString()
        }
    } */
function combine(value1, // Aqui estamos aplicando o type que criamos anteriormente.
value2, typeConv) {
    if (typeof value1 === 'number' && typeof value2 === 'number' || typeConv === 'isNumber') {
        return +value1 + +value2;
    }
    else {
        return value1.toString() + value2.toString();
    }
}
const sumNumbers = combine('5', '25', 'isNumber');
console.log(sumNumbers);
const makeAFullName = combine('Gustavo', 'Neves', 'isText');
console.log(makeAFullName);
