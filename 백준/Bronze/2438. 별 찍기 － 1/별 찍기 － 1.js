let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

//세개의 값중 몇개가 같은지 비교하기
let a = Number(input[0])
//let a = 5

//*
for (let i = 1; i <= a; i++) {
    let b = '*'
    console.log(b.repeat(i))
}
//a(a + 1) / 2
