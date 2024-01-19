const o = {}
o.__proto__ // => object.prototype


// Uncaught SyntaxError: Unexpected toekn '['
console.log(o.[[Prototype]])

//일부 내부 슬롯과 내부 메서드에 한하여 간접적으로접근할 수 있는 수단을 제공
//[Object: null prototype] {}
console.log(o.__proto__) 
