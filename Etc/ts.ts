function add(x: number, y: number): number {
  return x + y;
}

const a: typeof add = (x: number, y: number) => x + y;

console.log(add(15, 188));
console.log(a(1, 2));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person: Person = new Person("hi", 45);
