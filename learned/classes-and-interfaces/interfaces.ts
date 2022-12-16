interface Named {
  name: string;
  // o ? diz que essa propriedade é opcional
  outputName?: string;
}

//A interface é a estrutura de um objeto.
interface Person extends Named {
  greet(phrase: string): void;
}

class People implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  age = 18;
  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

const user = new People("Gustavo Neves");

user.greet("Olá! meu nome é ");
