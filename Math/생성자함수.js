// 클래스 정의
class Person {
    // 생성자 메서드
    constructor(name, age) {
        // 속성 정의
        this.name = name;
        this.age = age;
    }

    // 메서드 정의
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 클래스를 사용하여 객체 생성
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// 객체의 메서드 호출
person1.sayHello(); // Hello, my name is Alice and I am 25 years old.
person2.sayHello(); // Hello, my name is Bob and I am 30 years old.


// 인터페이스 정의
interface Printable {
    print(): void;
}

// 클래스 정의 및 인터페이스 구현
class Printer implements Printable {
    print() {
        console.log("Printing...");
    }
}

// 클래스의 인스턴스 생성
const printer = new Printer();
printer.print(); // Printing...




// 부모 클래스 정의
class Animal {
    constructor(public name: string) { }

    makeSound() {
        console.log("Some generic sound");
    }
}

// 자식 클래스 정의 및 부모 클래스 확장
class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // 부모 클래스의 생성자 호출
    }

    makeSound() {
        console.log("Woof! Woof!");
        super.makeSound(); // 부모 클래스의 메서드 호출
    }
}

// 클래스의 인스턴스 생성
const myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog.name); // Buddy
console.log(myDog.breed); // Golden Retriever
myDog.makeSound();



class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}


class Person {
    constructor(public name: string, public age: number) { }
}




class Circle {
    constructor(readonly radius: number) { }
}


class MathOperations {
    static add(x: number, y: number): number {
        return x + y;
    }
}

console.log(MathOperations.add(3, 5)); // 8



class Rectangle {
    private _width: number;

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be greater than 0.");
        }
    }
}




abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}




interface Printable {
    print(): void;
}

class Printer implements Printable {
    print() {
        console.log("Printing...");
    }
}


