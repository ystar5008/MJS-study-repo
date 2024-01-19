// Number.isNaN은 인수를 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isNaN(undefined)); // -> false
console.log(Number.isNaN(true)); // -> false
console.log(Number.isNaN(null)); // -> false
console.log(Number.isNaN(false)); // -> false
console.log(Number.isNaN('hi')); // -> false

// isNaN는 인수를 숫자로 암묵적 타입 변환한다. undefined는 NaN으로 암묵적 타입 변환된다.
console.log(isNaN(undefined)); // -> true
console.log(isNaN('undefined')); // -> true
console.log(isNaN('123')); // -> false '123'을 숫자로 변환하면 NaN아님
console.log(isNaN(123)); // -> false