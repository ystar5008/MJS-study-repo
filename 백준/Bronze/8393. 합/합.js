let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

//세개의 값중 몇개가 같은지 비교하기
let a = Number(input[0].split(' '))



let sum = 0
for (let i = 0; i <= a; i++) {
    sum += i
}

console.log(sum)