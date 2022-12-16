"use strict";
let value;
let peopleName;
value = 110;
value = 'Gustavo';
if (typeof value === 'string') {
    peopleName = value;
    console.log(peopleName);
}
function showError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(showError('404 not found', 404));
