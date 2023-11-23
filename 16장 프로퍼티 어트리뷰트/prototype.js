// 동물(Animal) 생성자 함수
class Animal {
    constructor(name) {
        this.name = name;
    }
    // 동물 프로토타입에 eat 메서드 추가
    eat(food) {
        console.log(`${this.name} is eating ${food}`);
    }
}


// 강아지(Dog) 생성자 함수, Animal을 상속받음
class Dog {
    constructor(name, breed) {
        // 부모 생성자 호출 (상속)
        Animal.call(this, name);
        this.breed = breed;
    }
    // Dog의 프로토타입에 bark 메서드 추가
    bark() {
        console.log(`${this.name} is barking!`);
    }
}

// Dog이 Animal을 상속받도록 설정
Dog.prototype = Object.create(Animal.prototype);


// 강아지 인스턴스 생성
const myDog = new Dog("Buddy", "Golden Retriever");

// eat 메서드 호출 (부모 클래스에서 상속)
myDog.eat("bones");

// bark 메서드 호출 (자식 클래스에서 추가)
myDog.bark();