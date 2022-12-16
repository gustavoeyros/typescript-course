abstract class Department {
  //um campo privado significa que ele só é acessível dentro da classe
  //private employees: string[] = [];

  //um campo protegido signifca que ele só é acessível dentro da classe e nas classes que herdam ele
  protected employees: string[] = [];

  // o readonly garante que aquele campo não irá ser alterado, ou seja, ela é inicializada uma vez e não deve ser alterada depois
  constructor(protected readonly id: string, private name: string) {}

  //Quando utilizamos o "this" como parâmetro, estamos falando que quando o describe for invocado, ele deve se referir a uma instância que é baseada na classe atual (Departamento)
  // método
  /*   describe(this: Department) {
    console.log(`Departamento ${this.id}: ${this.name}`);
  }
 */

  abstract describe(this: Department): void;

  //uma função estática
  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  showNumberOfEmployees() {
    console.log(`A quantidade de funcionários é: ${this.employees.length}`);
    console.log(this.employees);
  }
}

//o extends é utilizado para herdar os campos de outra classe
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // o super é utilizado para chamar o construtor da classe herdada
    super(id, "TI");
  }

  describe() {
    console.log("Departamento de TI - " + this.id);
  }
}

class MarketingDepartment extends Department {
  constructor(id: string, public catchphrases: string[]) {
    super(id, "MKT");
    this.lastCatchPhrase = catchphrases[0];
  }
  private lastCatchPhrase: string;

  //getter = É utilizado para retornar o valor da propriedade.
  get mostRecentCatchPhrase() {
    if (this.lastCatchPhrase) {
      return this.lastCatchPhrase;
    }
    throw new Error("Frase de efeito não encontrada.");
  }

  //setter = É utilizado para definir ou atualizar o valor da propriedade
  set mostRecentCatchPhrase(value: string) {
    if (!value) {
      console.log("Por favor, insira uma frase de efeito!");
    }
    this.addCatchPhrases(value);
  }

  describe() {
    console.log("Departamento de Marketing - " + this.id);
  }

  addCatchPhrases(text: string) {
    this.catchphrases.push(text);
    this.lastCatchPhrase = text;
  }

  showCatchPhrases() {
    console.log(this.catchphrases);
  }
}

//TI
const ti = new ITDepartment("Tecnologia", ["Gustavo"]);
ti.describe();
// Marketing
const mkt = new MarketingDepartment("Marketing", []);
mkt.describe();

mkt.mostRecentCatchPhrase = "Nunca desista!";
//console.log(mkt.mostRecentCatchPhrase);

//Department
const departmentTeste = Department.createEmployee("Testando");
//console.log(departmentTeste);
