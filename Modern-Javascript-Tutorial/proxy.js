//Proxy와 Reflect
//Proxy는 특정 객체를 감싸 프로퍼티 읽기, 쓰기와 같은 객체에 가해지는
//작업을 중간에서 가로채는 객체, 가로채진 작업은 Proxy 자체에서 처리괴디고 하고
//원래 객체가 처리하도록 그대로 전달되기도함

//target - 감싸게될 객체, 함수를 포함한 모든 객체가 가능
//handler - 동작을 가로채는 메서드인 trap이 담긴 객체, 여기서 get 트랩은 target의
//프토퍼티를 읽을 때, set트랩은 target의 프로퍼티를 쓸 떄 활성화

//트랩이 없는 프락시를 사용한 예시
let target = {};
let proxy = new Proxy(target, {}); // 빈 핸들러

proxy.test = 5; // 프락시에 값을 씁니다. -- (1)
console.log(target.test); // 5, target에 새로운 프로퍼티가 생겼네요!

console.log(proxy.test); // 5, 프락시를 사용해 값을 읽을 수도 있습니다. -- (2)

for (let key in proxy) console.log(key); // test, 반복도 잘 동작합니다. -- (3)
