class Person1 {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }
}

function Person2(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
}


const person1 = new Person1("짱구");
const person2 = new Person2("유리");
console.log(person1.name)//짱구
console.log(person2.name)//유리