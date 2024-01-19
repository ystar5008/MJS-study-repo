const 사람 = {
    // 데이터 프로퍼티
    firstName: '용식',
    lastName: '김',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
        [this.firstName, this.lastName] = name.split(' ');
    }
};

//용식 김
console.log(사람.firstName + ' ' + 사람.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
사람.fullName = '니가 최고야';
console.log(사람); //{ firstName: '니가', lastName: '최고야', fullName: [Getter/Setter] }

// 니가 최고야
console.log(사람.fullName);

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
let descriptor1 = Object.getOwnPropertyDescriptor(사람, 'firstName');
let descriptor2 = Object.getOwnPropertyDescriptor(사람, 'lastName');
console.log(descriptor1);
console.log(descriptor2);
// descriptor1 { value: '니가', writable: true, enumerable: true, configurable: true }
// descriptor2 { value: '최고야', writable: true, enumerable: true, configurable: true }

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
descriptor1 = Object.getOwnPropertyDescriptor(사람, 'fullName');
console.log(descriptor1);
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}
