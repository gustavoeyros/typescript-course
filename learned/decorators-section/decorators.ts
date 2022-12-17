// ------------------ First Decorator Class --------------------

/* function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

@Logger // Decorators: É uma estrutura que permite adicionar novos comportamentos ao objetos dinamicamente.
class Person {
  name = "Gustavo";

  constructor() {
    console.log("Criando o objeto...");
  }
}

const pers = new Person();

console.log(pers); */

// ------------------  Decorator Factories --------------------
/* 
function Logger(log: string) {
  return function (constructor: Function) {
    console.log(log);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Renderizando template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Logging - Person")
@WithTemplate("<h1>Object Person</h1>", "app")
class Person {
  name = "Gustavo";
  constructor() {
    console.log("Criando o objeto...");
  }
}

const pers = new Person();

//
function Log(target: any, propertyName: string) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

// accessor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("É necessário ser um valor positivo.");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price + tax;
  }
}

// ------------------  Autobind Decorator --------------------

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orgMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // quando o get for acionado, ele irá se referir ao método original, e não ao do addevent nesse caso
      const boundFunction = orgMethod.bind(this);
      return boundFunction;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "Está funcionando!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const prin = new Printer();
const button = document.querySelector("button");

button?.addEventListener("click", prin.showMessage);

// ------------------  Decoratos for validation --------------------

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // required and positive
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form");

courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Valor inválido! Tente novamente.");
    return;
  }

  console.log(createdCourse);
});
 */
