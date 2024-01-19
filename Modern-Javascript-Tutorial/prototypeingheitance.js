//Object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면
//자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾음
//프로토타입 상속

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal;
  
  console.log(rabbit)
  console.log(animal)

  