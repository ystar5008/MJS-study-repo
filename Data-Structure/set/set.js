// Set 생성
const mySet = new Set();

// 값 추가
mySet.add(1);
mySet.add(5);
mySet.add(1); // 중복된 값은 추가되지 않음

console.log(mySet); // Set { 1, 5 }

// 값 삭제
mySet.delete(5);

console.log(mySet); // Set { 1 }

// 값 존재 여부 확인
console.log(mySet.has(1)); // true
console.log(mySet.has(5)); // false

// Set의 크기 확인
console.log(mySet.size); // 1

// Set 순회
mySet.forEach(value => {
    console.log(value); // 1 출력
});



