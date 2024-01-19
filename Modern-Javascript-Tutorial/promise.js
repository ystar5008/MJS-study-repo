function 프로미스() {
    fetch('https://www.naver.com') // 거부
        .then(response => response)
        .catch(err => console.error(err)) // TypeError: failed to fetch (출력되는 내용은 다를 수 있음)
}





function 프로미스1() {
    fetch('/article/promise-chaining/user.json')
        .then(response => response.json())
        .then(user => fetch(`https://api.github.com/users/${user.name}`))
        .then(response => response.json())
        .then(githubUser => new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);

            setTimeout(() => {
                img.remove();
                resolve(githubUser);
            }, 3000);
        }))
        .catch(error => alert(error.message));
}


//프라미스 API
//Promise.all
//여러개의 프라미스를 동시에 실행시키고 모든 프라미스가 준비될 때 까지 기다림
function PromiseAll() {
    Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
        new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
        new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
    ]).then(alert); // 프라미스 전체가 처리되면 1, 2, 3이 반환됩니다. 각 프라미스는 배열을 구성하는 요소가 됩니다.
}


function PromiseAll2() {
    let urls = [
        'https://api.github.com/users/ystar5008',
        'https://api.github.com/users/ystar5008',
        'https://api.github.com/users/jeresig'
    ];

    // fetch를 사용해 url을 프라미스로 매핑합니다.
    let requests = urls.map(url => fetch(url));

    console.log(requests)
    // Promise.all은 모든 작업이 이행될 때까지 기다립니다.
    Promise.all(requests)
        .then(responses => responses.forEach(
            response => console.log(`${response.url}: ${response.status}`)
        ));
}


//console.log(PromiseAll2())



function PromiseAll3() {
    let names = ['iliakan', 'Violet-Bora-Lee', 'jeresig'];

    let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

    Promise.all(requests)
        .then(responses => {
            // 모든 응답이 성공적으로 이행되었습니다.
            for (let response of responses) {
                console.log(`${response.url}: ${response.status}`); // 모든 url의 응답코드가 200입니다.
            }

            return responses;
        })
        // 응답 메시지가 담긴 배열을 response.json()로 매핑해, 내용을 읽습니다.
        .then(responses => Promise.all(responses.map(r => r.json())))
        // JSON 형태의 응답 메시지는 파싱 되어 배열 'users'에 저장됩니다.
        .then(users => users.forEach(user => console.log(user.name)));
}

console.log(PromiseAll3())

//Promise.all에 전달되는 프라미스 중 하나라도 거부되면, Promise.all이 반환하는 프라미스는 에러와 함께 바로 거부됩니다.
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러 발생!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.error(error)); // Error: 에러 발생!

//Promise.allSettled는 모든 프라미스가 처리될 때까지 기다립니다. 반환되는 배열은 다음과 같은 요소를 갖습니다.


function PromiseAllSettled() {
    let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/Violet-Bora-Lee',
        'https://no-such-url'
    ];

    Promise.allSettled(urls.map(url => fetch(url)))
        .then(results => { // (*)
            results.forEach((result, num) => {
                if (result.status == "fulfilled") {
                    console.log(`${urls[num]}: ${result.value.status}`);
                }
                if (result.status == "rejected") {
                    console.log(`${urls[num]}: ${result.reason}`);
                }
            });
        });



}


//Promise.race