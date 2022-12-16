"use strict";
function combine(value1, value2, typeConv) {
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
