class Person1 {
    constructor() {
        // 고정값으로 인스턴스 초기화
        this.name = 'Lee';
        this.address = 'Seoul';
    }
}

const person1 = new Person1();
console.log(person1); // Person1 {name: "Lee", address: "Seoul"}


class Person2 {
    constructor(name, address) {
        //인자로 인스턴스 초기화
        this.name = name
        this.address = address
    }
}
//여기서 전달된 인자는 순서대로 생성자 함수에 할당
const person2 = new Person2('짱구', '일본');
console.log(person2); // Person2 { name: '짱구', address: '일본' }