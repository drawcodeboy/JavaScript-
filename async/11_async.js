'use strict';

// async & await
// clear style of using promise

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs....
        resolve('ellie');
    });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// ====

async function fetchUser2() {
    // do network request in 10 secs....
    return 'ellie';
}

const user2 = fetchUser2();
user2.then(console.log);//consumer
console.log(user2);

// 2. await
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function getApple() {// async가 붙은 함수 안에서만 await을 사용할 수 있다.
    await delay(2000);
    //throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}
// ====
function getBanana2() {
    return delay(3000)
        .then(()=>'🍌');
}

function pickFruits() {// 이는 callback 지옥과 마찬가지다.
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `${apple} + ${banana}`);
        });
}

pickFruits().then(console.log);

// ====

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise; // 1초
    const banana = await bananaPromise; // 1초
    /**
    const apple = await getApple(); // 1초
    const banana = await getBanana(); // 1초
    //총 2초
    */
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//동기적으로 작성하듯이 async와 await을 통해
//비동기적 표현을 할 수 있다.

//주석처리가 된 부분은 await의 직렬적 처리 총 2초 (1 + 1)를
//promise를 통해 선언하자마자 바로 불러서 병렬적 처리(1초)로 바꾼 것이다.

// 3. useful Promise APIs

// .all()
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits()
    .then(console.log);

// .race()
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne()
    .then(console.log);