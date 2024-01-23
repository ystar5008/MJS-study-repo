/**
 * 클로저는 외부 변수에도 스코프 밖에서 접근할 수 있게해줌
 */

function outerFunction(arg) {
    //bar()함수 외부에서 변수 선언
    var variableInOuterFunction = arg;

    function bar() {
        //bar()외부 함수의 변수는 내부 함수에 의해서만 접근이 가능
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }

    // Call the local function to demonstrate that it has access to arg
    bar();
}

outerFunction('hello closure'); // logs hello closure!

function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    };
}

var innerFunction = outerFunction('hello closure!');

// Note the outerFunction has returned
innerFunction(); // logs hello closure!
