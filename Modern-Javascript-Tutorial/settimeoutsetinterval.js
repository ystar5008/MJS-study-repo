//일정시간이 지난 후에 원하는 함수를 예약실행 => 호출 스케줄링
// 1. setTimeout
// 2. setInterval

// setTimeout

function 비동기호출() {
    console.log('안녕하세요.');
}

setTimeout(비동기호출, 1000);

function 비동기문자호출가능(who, phrase) {
    alert(who + ' 님, ' + phrase);
}

setTimeout(비동기문자호출가능, 1000, '김용식', '안녕하세요.');

setTimeout(() => alert('안녕하세요.'), 1000);
