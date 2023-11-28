Number.isFinite(0); // -> true
Number.isFinite(Number.MAX_VALUE); // -> true
Number.isFinite(Number.MIN_VALUE); // -> true

// 인수가 무한수이면 false를 반환한다.
Number.isFinite(Infinity); // -> false
Number.isFinite(-Infinity); // -> false

const Finite = (In) => {
  return Number.isFinite(In);
};

console.log(Finite(Infinity)); //false
console.log(Finite(-Infinity)); //false
console.log(Finite(0)); //true
console.log(Finite(NaN)); //false
