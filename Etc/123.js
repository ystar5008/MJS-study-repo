let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let maxIndex = 0;
let maxValue = 0;
for (let i = 0; i < 9; i++) {
    let data = Number(input[i])
    if (maxValue < data) {
        maxValue = data
        maxIndex = i
    }
}

console.log(maxValue)
console.log(maxIndex + 1)

let data = input.map(x => Number(x))
let max = Math.max(...data)

console.log(max)
// 최대 값의 인덱스 + 1
console.log(input.indexOf(max) + 1)