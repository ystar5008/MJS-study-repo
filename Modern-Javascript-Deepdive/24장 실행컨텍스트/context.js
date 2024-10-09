// 전역 실행 컨텍스트
var a = 10;
function foo() {
    // foo 함수 실행 컨텍스트
    console.log(this) //global
    var b = 20;
    function bar() {
        console.log(this) //global
        // bar 함수 실행 컨텍스트
        var c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
    bar();
}
foo();
