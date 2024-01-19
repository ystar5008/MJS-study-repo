const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        // setter 함수
        set(name) {
            //console.log("🚀 ~ file: 16.09.js:26 ~ set ~ name:", name)
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = '니가 최고야';
console.log(person); // {firstName: "니가", lastName: "최고야"}
console.log(person.fullName);// 니가 최고야
console.log(Object.getOwnPropertyDescriptors(person))