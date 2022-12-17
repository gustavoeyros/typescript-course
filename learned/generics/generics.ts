/* let names: Array<string>; // generics (< >) dizem o tipo que esperamos receber a executar esse código. Nesse caso, é parecido se colocassemos "string[]"

names = ["opa", "!"];
console.log(names);
 */

// ---------------- Generics Functions ---------------------

// nesse caso, estamos colocando 2 tipos genéricos, ou seja, eles vão se adaptar com o que for passado na hora, sem a necessidade de especificar que o primeiro é string e o segundo é number.
// colocando o 'extends object', dizemos que ele se adapta a qualquer tipo, basta ser um objeto.
function objMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({ objA }, { objB });
}

const merged = objMerge({ name: "Gustavo" }, { age: 20 });
//console.log(merged.objA);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(el: T): [T, string] {
  let descText = "Sem valor";
  if (el.length === 1) {
    descText = "Só possui 1 elemento.";
  } else if (el.length > 1) {
    descText = `Possui ${el.length} elementos`;
  }
  return [el, descText];
}

// ---------------- The keyof ---------------------

// com o keyof, podemos dizer ao typescript que "key" deve ser uma propriedade de 'T', que é o objeto.
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
//console.log(extractAndConvert({ name: "Gustavo" }, "name"));

// ---------------- Generics Classes ---------------------

// apenas aceita valores primitivos
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const txtStorage = new DataStorage<string>();

// text
txtStorage.addItem("Gustavo");
txtStorage.addItem("Teste");
txtStorage.removeItem("Teste");
//console.log(txtStorage.getItems());

// numbers
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
//console.log(numberStorage.getItems());

// objects
/* const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Gustavo" });
objStorage.addItem({ name: "Teste" });

console.log(objStorage.getItems());
 */

// ---------------- Generic Utility Types ---------------------

interface Course {
  title: string;
  description: string;
  price: number;
}

function createCourse(
  title: string,
  description: string,
  price: number
): Course {
  //com auxílio do Partial, dizemos que as propriedades de Course são opcionais no momento, ou seja, ele irá sim se tornar um Course, mas apenas no final.
  let course: Partial<Course> = {};
  course.title = title;
  course.description = description;
  course.price = price;
  return course as Course;
}

const names: Readonly<string[]> = ["Teste1", "Teste2"];
// names.push("Nome"); // irá retornar um erro, visto que, definimos que a const é somente leitura
