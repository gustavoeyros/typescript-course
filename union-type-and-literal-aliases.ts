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

    type Combinable = number | string;  // Podemos criar nossos próprios tipos e definir um nome para ele. Nesse caso, criei o "Combinable", que significa que ele aceita número ou string.
    type DescAccept =  'isNumber' | 'isText';

    function combine
    (
        value1: Combinable,  // Aqui estamos aplicando o type que criamos anteriormente.
        value2: Combinable,
        typeConv: DescAccept 
    ){ 
        if(typeof value1 === 'number' && typeof value2 === 'number' || typeConv === 'isNumber'){
            return +value1 + +value2;
        } else{
            return value1.toString() + value2.toString()
        }
    }


const sumNumbers = combine('5', '25', 'isNumber');
console.log(sumNumbers);


const makeAFullName = combine('Gustavo', 'Neves', 'isText');
console.log(makeAFullName);

