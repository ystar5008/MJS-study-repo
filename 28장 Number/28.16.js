// Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않는다.
Number.isFinite(null); // -> false
console.log(Number.isFinite('1')); // -> false
console.log(isFinite('1')); // -> true

// isFinite는 인수를 숫자로 암묵적 타입 변환한다. null은 0으로 암묵적 타입 변환된다.
console.log(isFinite(null)); // -> true
console.log(isFinite(true)); // -> true
console.log(isFinite(false)); // -> true 
console.log(Number(false) === 0) // -> true
console.log(Number(true) === 1) // -> true
console.log(Number.isFinite(null)); // -> false
console.log(Number.isFinite(true)); // -> false
console.log(Number.isFinite(false)); // -> false