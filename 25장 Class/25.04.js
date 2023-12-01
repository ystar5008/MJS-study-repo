// 클래스 선언문
class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name; // name 프로퍼티는 public하다.
    }

    // 프로토타입 메서드
    // 클래스의 인스턴스에 속하는 메서드
    // 각 인스턴스에 대해 별도의 메모리르 차지하지 않고 클래스의 프로토타입에 저의됨
    // 인스턴스의 상태를 조작하거나 인스턴스와 관련된 동작을 수행
    // 클래스로 생성된 모든 인스턴스에서 공유됨
    // sayHi메서드는 프로토타입 메서드로 Person 인스턴스에서 공통으로 사용됨
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }

    // 정적 메서드
    // 클래스 자체에 속하는 메서드
    // 클래스의 인스턴스와는 관련 x 클래스 수준의 동작을 수행하는데 사용됨
    // 인스턴스를 생성하지 않고도 클래스 이름을 통해 직접호출 가능
    static sayHello() {
        console.log('Hello!');
    }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메서드 호출
Person.sayHello(); // Hello!