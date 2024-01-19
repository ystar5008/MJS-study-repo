const person = { name: 'Lee' };
const animal = { name: 'dog' }
// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true
console.log(Object.isExtensible(animal)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person)); // false
// animal 객체는 preventExtensions메서드로 확장을 금지 시키지않음
console.log(Object.isExtensible(animal)); // true

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person); // {name: "Lee"}

// 객체 확장이 금지되지 않았으므로 프로퍼티 추가도 가능
animal.tail = true
console.log(animal)
// {name : 'dog' , animal : true}
delete animal.name
console.log(animal)
// {tail : true}

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', { value: 20 });
// TypeError: Cannot define property age, object is not extensible