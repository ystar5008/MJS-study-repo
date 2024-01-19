// 문자열 타입 => 숫자 타입
Number('0');     // -> 0
Number('-1');    // -> -1
Number('10.53'); // -> 10.53

// 불리언 타입 => 숫자 타입
Number(true);  // -> 1
Number(false); // -> 0


Number(true) === 1
Number(false) === 0
Number(undefined) //NaN
Number(undefined) === NaN //false
NaN === NaN // false
NaN !== NaN //true
Number(null) //0
Number(null) === 0 //true