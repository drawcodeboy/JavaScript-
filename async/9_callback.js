'use strict';

// JavaScript is synchronous. >> 동기적이다.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration이 제일 위로 올라가는 것

console.log(`1`);
//브라우저 api >> 브라우저에게 요청
setTimeout(() => console.log(`2`), 1000); // >> asynchronous == 비동기
console.log(`3`);

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));
//인자에 함수를 전달
//자바스크립트라 그런가, 낯설다

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

console.clear();

//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){// method
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            )
            {
                onSuccess(id);
            }
            else{
                onError(new Error('not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){// method
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    (user) =>{// onSuccess를 통해 id라는 매개변수는 user이다.
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                alert(error);
            }
        );
    },
    (error) => {console.log(error)}
);
//문제점
//가독성이 떨어짐
//비즈니스 로직을 한 번에 이해하기도 어려움
//에러가 발생하거나 디버깅을 해야할 때도 어려움