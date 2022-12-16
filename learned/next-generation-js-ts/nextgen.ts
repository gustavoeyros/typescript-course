// ---------------- Arrow Function --------------------

/* const add = function (number1: number, number2: number) { // sem arrow function
  return number1 + number2;
};

const add = (num1: number, num2: number) => num1 + num2; // com arrow function
 */

// -------------- Spread Operator ---------------

/* 
const games = ["New World", "DayZ"];
const activeGames = ["God of War", ...games]; // operador spread

const person = {
  name: "Gustavo",
  age: 18,
  games: [...activeGames],
};

const showPerson = { ...person };

console.log(showPerson);
 */

// -------------- Rest Parameters ---------------

/* const add = (...values: number[]) => { //rest parameter, ele irá pegar todos os parâmetros passados
  return values.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
};

console.log(add(10, 10, 10));
 */

// -------------- Array & Object Destructuring ---------------

/* 
const favoriteGames = ["New World", "DayZ", "God of War"];

const [game1, game2, ...remainingGames] = favoriteGames; // destructuring array, ele irá percorrer o array favoriteGames e armazenar os 2 primeiros elementos nos 2 parâmetros, posso armazenar o que sobrar usando um rest parameter.
console.log(remainingGames); 

const person = {
  firstName: "Gustavo",
  age: 18,
};

const { firstName, age } = person;

console.log(firstName, age);

*/
