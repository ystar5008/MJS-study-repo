const str = "Hello World";
const ret = str.split(" ");
console.log(ret)
const join = ret.join(' ')
console.log(join)

const numbers = [3, 5, 3, 26, 4, 2, 1, 7, 4, 2, 21, 32]
number = numbers.sort((a, b) => a - b)
number = numbers.sort((a, b) => (a - b) * 1)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ret2 = numbers.filter(e => e % 2 === 0)

const number3 = [1, 2, 3, 4, 5, 6]
const ret3 = number3.map(e => e * 2)

const b = []

for (let i of number3) {
    b.push(i * i)
}

const number4 = [1, 5, 6, 7, 8, 9]
const ret4 = number4.reduce((e, number) => e + number, 0)


const graph = {
    1: [2, 3],
    2: [4],
    3: [4, 5],
    4: [],
    5: [],
}

const dfs = (here, visited = new Set()) => {
    if (visited.has(here)) return
    visited.add(here)
    console.log(here)
    graph[here].forEach(e => dfs(e, visited))
}
dfs(1);

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const bs = () => {
    let lo = 0;
    let hi = arr.length - 1;
    const target = 3
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        if (arr[mid] === target) {
            console.log(target)
        } else if (arr[mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return -1
}

// bs()

let arr2 = Array(5).fill().map(e => Array(50).fill(0))
console.log(arr2)


const fibo = (idx, memo = {}) => {
    if (idx <= 2) return 1
    if (idx in memo) return memo[idx]
    memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo)
    return memo[idx]
}

const eee = fibo(10)
console.log(eee)

const arr5 = [1, 2, 3, 4, 5];
[arr[1], arr[3]] = [arr[3], arr[1]]
console.log(arr5)
