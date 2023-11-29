Math.max(1); // -> 1
Math.max(1, 2); // -> 2
Math.max(1, 2, 3); // -> 3
Math.max(); // -> -Infinity
console.log(Math.max(1, 43, 5432, 542, 241)) //5432
const a = [1, 43, 5432, 542, 241]
console.log(Math.max(...a)) //5432