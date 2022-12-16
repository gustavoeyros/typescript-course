"use strict";
/* const peopleTS: { // Isso não cria um novo objeto na hora de compilar para JS, ele apenas auxilia o TS a identificar a tipagem das propriedades.
    name: string,
    age: number
} = {
    name: 'Gustavo',
    age: 18
}
 */
/* const people: {
    name: string,
    age: number,
    hobbies: string[],
    roles: [number, string] // tupla, um valor fixo do tamanho do array
} = {
    name: 'Gustavo',
    age: 18,
    hobbies: ['Study', 'Games'],
    roles: [10, 'Administrator']
} */
// people.roles[0] = 'x' // Irá retornar um erro, visto que, nós definimos que roles receberá apenas 2 valores, respectivamente, número e string, ou seja, não há como alterar seu tipo.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Moderator"] = 1] = "Moderator";
    Role[Role["CommunityManager"] = 2] = "CommunityManager";
    Role[Role["User"] = 3] = "User";
})(Role || (Role = {})); // Enum é uma lista enumerada com constantes globais para serem utilizadas em todo código.
const people = {
    name: 'Gustavo',
    age: 18,
    hobbies: ['Study', 'Games'],
    roles: Role.Admin
};
let favoriteHobbies; // isso afirma que essa variável, só recebe valores strings no array, ou seja, é um array restrito.
let favoriteGames; // isso afirma que essa variável, recebe qualquer tipo de valor no array, ou seja, é um array flexível. 
