'use strict';

// Promise is a JavaScript object for asynchronous operation.
// Promise는 비동기처리를 위해 자바스크립트 내부에 선언된 object이다.
// state: pending -> fulfilled or rejected
// state
// pending
// promise가 만들어져서 지정한 operation을 수행 중일 때
// 완벽하게 수행을 하면 fulfilled 상태
// 파일을 찾을 수 없거나 네트워크에 문제가 생긴다면 rejected
// Producer vs Consumer

// 

// 1. Producer
// when new Promise is created, the executor runs automatically.
// promise를 쓰는 순간 network의 통신이 일어나게 된다.
// executor(resolve, reject)가 바로 작동하기 때문이다.
// 사용자가 버튼을 눌렀을 때 선택적으로 통신이 일어나게 하려면
// 
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    // >> 비동기적으로 받아오는 것이 좋다.
    console.log(`doing something...`);

    setTimeout(() => {
        //resolve('ellie(받아온 데이터)');
        // 파일에서 받아오거나 가공된 데이터를 resolve라는
        // 함수를 통해 전달해준다.
        reject(new Error('no network'));
    }, 2000);
});
// 만들어지는 순간 네트워크 통신을 한다.
// 네트워크를 통해 받아오는 데이터의 양이 많기 때문에
// 동기처리를 통해 받아오면 느려지게 된다.
// 이를 해결하기 위해 데이터를 비동기(async)를 통해 받아온다.

// 2. Consumers: then, catch, finally
promise
    .then((value) => { //데이터를 받아오는 것이 성공했을 때
        // then은 promise가 정상적으로 잘 수행이 되어서
        // resolve라는 콜백함수를 통해서 전달한 값이
        // value의 파라미터로 들어오게 된다.
        console.log(value);
    })
    .catch(error => {
        // 데이터를 받아오는 것에 성공했을 때만 다루었기 때문에
        // catch를 통해 error가 발생했을 때는 
        // 어떻게 처리할 것인지 callback function을 등록해준다.
        //console.log(error);
    })
    .finally(() => {
        // 데이터를 받아오는 것이 성공하든(resolve)
        // 실패하든(reject) 마지막에 수행하는 것을
        // 작성할 수 있는 api다.
        console.log(`finally`);
    });

// chaining
// then을 호출하게 되면 똑같은 promise가 리턴이 되기 때문에
// 리턴된 promise에 catch를 다시 호출할 수 있는 것이다.

console.clear();

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    // doing some heavy work
    console.log('first server 통과');
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            console.log(`second server 통과`)
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`🐔`), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))// 여기서 error가 발생하면
    .catch(error => {// 바로 다음에 catch를 통해 error를 해결한다
        return '🍞';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);
    /**
     * ==
     * .then(getEgg)
     * .then(cook)
     * .then(console.log)
     */
