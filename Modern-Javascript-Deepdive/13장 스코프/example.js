// 전역 변수
var globalVar = "전역변수1";
let a = 52

function outerFunction() {
    console.log(a)
    var outerVar = "지역변수1";

    if (true) {
        var blockVar = "지역변수2";
        //let blockVar = "지역변수2";r
        console.log(blockVar);
    }

    console.log(blockVar);
    function innerFunction() {
        var innerVar = "지역변수3";
        console.log(outerVar);
        console.log(globalVar);
        console.log(innerVar)

    }
    console.log(a)
    // console.log(innerVar)
    innerFunction();
}
outerFunction();
console.log(globalVar);


