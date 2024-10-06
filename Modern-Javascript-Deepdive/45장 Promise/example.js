console.log('1. 동기 코드 시작');

function t() {
    console.log('2. 동기 함수 1 실행');
}

function syncFunction2() {
    console.log('3. 동기 함수 2 실행');
}

syncFunction1(); // 동기 함수 1 실행
syncFunction2(); // 동기 함수 2 실행
setTimeout(() => {
    console.log('6. setTimeout 실행');
}, 0);

Promise.resolve().then(() => {
    console.log('5. Promise 실행');
});

console.log('4. 동기 코드 완료');
