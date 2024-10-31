// 5
// 54321

let conut = 11
let number = 10987654321

let arr = String(number)
let sum = 0;
console.log(arr)
for (let i = 0; i < conut; i++) {
    console.log(+arr[i])
    sum += +arr[i]
}
console.log(sum)