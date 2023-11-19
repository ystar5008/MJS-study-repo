const person = {
    name: 'kim',
    age: 18
}

//데이터 어트리뷰트를 나타냄
//[[Value]] => 프로퍼티의 실제 값을 나타냄
//[[Writable]] => 해당 프로퍼티의 값이 변경 가능한지 여부를 나타냄
//[[Enumerable]] => 프로퍼티가 열거가 가능한지 여부를 나타냄
//[[Configurable]] => 프로퍼티의 속성을 변경하거나 프로퍼티를 삭제할 수 있는지 여부를 나타냄
//{ value: 18, writable: true, enumerable: true, configurable: true }

//Obejct.getOwnPropertyDescriptor 메소드를 통해 간접적으로 프로퍼티 어트리뷰트 확인
console.log(Object.getOwnPropertyDescriptor(person, 'age'))
console.log(Object.getOwnPropertyDescriptors(person))