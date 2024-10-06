//객체 리터럴로 객체 인스턴스 생성하기
let person = {
    name: 'kim',
    sayHello: function () {
        this.name = `${this.name}` + ' yong sik'
    }
}

console.log(person.name)
person.sayHello()
console.log(person.name)



//객체리터럴과 동일한 객체 인스턴스를 생성하지만 new 키워드로 class인스턴스를 생성
class Person {
    name = 'kim'
    sayHello() {
        this.name = `${this.name}` + ' yong sik'
    }

}

const _person = new Person()

console.log(_person.name)
_person.sayHello()
console.log(_person.name)

let animal = {
    firstName: 'kim',
    'fistname': 'sdf'
}

const obj = {

    //'helloo' : world
}

const hello = 'helloo'
//객체에 프로퍼티키 동적으로 할당하기
obj[hello] = 'world'


delete obj.helloo

let x = 1, y = 2

let obj = {
    x: x,
    y: y
}

let obj = {
    x,
    y
}