const 사람 = {
    name: 'Lee'
};

// 프로퍼티 동적 생성
사람.age = 20;
사람.gender = '남자';
사람.job = '공무원'
console.log(사람)

console.log(Object.getOwnPropertyDescriptors(사람));