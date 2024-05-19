//재귀는 큰 목표작업 하나를 동일하면서 간단한 작업 여러개로 나눌 때 사용함
//함수가 자기 자신을 호출하는 것을 재귀

function pow(x, n) {
    let result = 1;

    // 반복문을 돌면서 x를 n번 곱함
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 3)); // 8


//재귀적으로 함수 호출시 조건문에서 2가지 유형으로 갈림
//pow는 n===1이 될떄 까지 재귀적으로 자신을 호출함
//재귀의 깊이는 n임
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 4)); // 8


//삼항 연산자를 사용하여 재귀함수 줄이기
//재귀 깊이는 n임
//자바스크립트 엔진은 최대 재귀 깊이를 만개까지 허용
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}