const a = '전역변수 a'
console.log(a)
function foo() {
    //const a = '함수 지역변수'
    console.log(a)
    let b = '함수 지역변수 b'
    console.log(a)
    if (true) {
        function bar() {

            console.log(b)
        }
        bar()
    }
}

foo()
console.log(globalThis)