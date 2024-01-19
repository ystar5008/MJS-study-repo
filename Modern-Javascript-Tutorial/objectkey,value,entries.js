//key(),values(),entries()를 사용할 수 있는 자료구조는
//Map ,Set Array


//Object.keys,values, entries는 심볼형 프로퍼티를 무시함
//for..in 반복문 처럼 keys,values,entries는 키가 심볼형인 프로퍼티를 무시함
//심볼형 키가 필요한 경우 심볼형 키만 배열 형태로 반환해주는 메서드인 Object.getOWnPropertySymbols를 사용
console.log(Object.getOwnPropertySymbols(obj)) 

//객체변환하기
//객체엔 map, filter 같은 배열전용 메서드를 사용할 수 없음
//Object,entries, Object.fromEntries 메서드를 순차적으로 적용하면 객체에도 배열 전용 메서드를 사용가능

let  a = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// let doublePrices = Object.fromEntries(
//   // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );
//console.log(곱하기)
//2. 1에서 만든 배열에 map등의 배열 전용 메서드를 적용

//3. 2에서 만든 배열에 Object.fromEntries(array) 등의 배열 전용 메서드를 적용

let valueArr = []
for(key in obj){
    valueArr.push(obj[key])
}

console.log(obj)