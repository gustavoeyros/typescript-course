// ------------------- Intersection Type (&) ----------------

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //Intersection Type (&): É utilizado para fazer a interseção entre dois tipos, podemos juntar 2 tipos em 1 só e criar um novo.

const el: ElevatedEmployee = {
  name: "Gustavo",
  privileges: ["create-server", "mute-users"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// ------------------- Type Guard ----------------

function add(a: Combinable, b: Combinable) {
  //type guard, ele verifica qual tipo ele está recebendo e qual ação ele irá executar dependendo do tipo
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

type UnknownEmployee = Employee | Admin;

function showEmployeeInfor(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  //irá verificar se existe essa propriedade em emp
  if ("privileges" in emp) {
    console.log("Privilégios: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privilégios: " + emp.startDate);
  }
}
//showEmployeeInfor({ name: "Gustavo", privileges: ["create-server"] });

class Car {
  drive() {
    console.log("Dirigindo um carro");
  }
}

class Truck {
  drive() {
    console.log("Dirigindo um caminhão");
  }
  loadCargo(amount: number) {
    console.log(`Carregando um carga de ${amount}kg`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // com instaceof, podemos verificar de qual classe o objeto foi instaciado
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}

/* useVehicle(v1);
useVehicle(v2); */

// ------------------- Discriminated Union ----------------
interface Bird {
  type: "bird"; //discriminated union, é utilizado para facilitar a verificação do objeto.
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Se movendo na velocidade de ${speed}km/h`);
}

moveAnimal({ type: "horse", runningSpeed: 100 });

// ------------------- Type Casting ----------------
const userInput = document.getElementById("user-input")! as HTMLInputElement; // o 'as' sinaliza o tipo que está sendo passado, no caso é um HTMLInputElement, visto que, o TS não consegue identificar qual elemento está sendo utilizado apenas pelo ID.

userInput.value = "Opa!";

// ------------------- Index Properties ----------------
interface ErrorContainer {
  [prop: string]: string; // estamos dizendo que a propriedade deve ser uma string com um valor em string também, independente da propriedade.
}

const errorBag: ErrorContainer = {
  email: "E-mail inválido!",
  username: "Comece o nome do usuário com uma letra.",
};

// ------------------- Functions Overloads ----------------

function sum(a: string, b: string): string; // Functions Overloads ajudam a inferir o tipo exato do parâmetro para auxiliar o TS identificar o tipo.
function sum(a: number, b: number): number;
function sum(a: string, b: number): string;
function sum(a: number, b: string): string;
function sum(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const overloadEx = sum("Tste", "txt");
overloadEx.split(" ");

// ------------------- Optional Chaining ----------------

const fetchedUserData = {
  id: "num1",
  name: " Gustavo",
  job: { title: "User", description: "Common user" },
};

//console.log(fetchedUserData?.job?.title); // o "?" irá verificar se a propriedade existe, caso sim, ele irá rodar normalmente, caso não, irá "crashar"

// ------------------- Nullish Coalescing ----------------

const inputNullish = undefined;

const storedData = inputNullish ?? "DEFAULT"; // o "??" irá verificar se o que ele está recebendo é nulo ou undefined, se for um dos 2, ele retorna 'DEFAULT', caso não, ele retorna o que o usuário digitou, mesmo que tenha deixado o campo vazio.

//console.log(storedData);
