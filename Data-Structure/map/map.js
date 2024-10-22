// Map 생성
const myMap = new Map();

// 키-값 쌍 추가
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(true, 'This is a boolean key');
myMap.set(false, 'false');

console.log(myMap); // Map { 'name' => 'John', 'age' => 30, true => 'This is a boolean key' }

// 값 가져오기
console.log(myMap.get('name')); // John
console.log(myMap.get(true)); // This is a boolean key

// 키-값 쌍 삭제
myMap.delete('age');

console.log(myMap); // Map { 'name' => 'John', true => 'This is a boolean key' }

// Map에 키가 있는지 확인
console.log(myMap.has('age')); // false
console.log(myMap.has('name')); // true

// Map의 크기 확인
console.log(myMap.size); // 2

// Map 순회
myMap.forEach((value, key) => {
    console.log(typeof value)
    console.log(`${key}: ${value}`);
});
// 출력: name: John
//       true: This is a boolean key
