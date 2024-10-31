let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let set = new Set()
for (let i = 0; i < input.length; i++) {

    let 나누기 = Math.floor(input[i] % 42)
    set.add(나누기)

}

console.log(set.size)