// ES5 생성자 함수
// Person변수 선언, 즉시 실행되는 함수인 IIFE, 함수는 생성자와 프로토타입 메서드를 캡슐화
var Person = (function () {
    // 생성자 함수 Person, name이라는 매개변수를 받아 새로 생성된 객체의 name 속성에 할당함
    function Person(name, age) {
        this.name = name;
        this.age = age
    }

    // 프로토타입 메서드
    // Person 생성자의 프로토타입 sayHi라는 메서드 추가
    // 이 메서드는 콘솔에 메세지를 로깅하는데, 메세지 안에 name 속성이 포함됨
    Person.prototype.sayHi = function () {
        console.log('Hi! My name is ' + this.name);
        console.log('im' + this.age + 'age');
    };

    // 생성자 함수 반환
    //전체 IIFE가 Person 생성자를 반환
    return Person;

}());

//new Person 객체생성
var me = new Person('Lee', 18);
me.sayHi(); // Hi! My name is Lee\


//IIFE : Immediately Invoked Function Expression
//자바스크립트에서 함수를 정의하고 즉시 실행되는 함수 표현식
(function () {
    const 현재시간 = new Date
    console.log(현재시간.toLocaleString())
})();