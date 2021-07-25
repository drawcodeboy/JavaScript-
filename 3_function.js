'use strict';

//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// 예전 방식
function showMessage1(message, from){
    if (from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage1('Hi!');
// ES6에 추가된 후
function showMessage2(message, from = 'unknown'){//parameter에 원하는 default 값을 넣어주면 된다.
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){// ...은 배열 형태로 전달
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    //아래와 동일한 for 구문
    for(const arg of args){
        console.log(arg);
    }
    //아래와 동일한 배열 함수
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // gloval variable
function printMessage(){
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    //=== return undefined;
}
printMessage();

// 6. Return a Value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. Early return, early exit
//조건 안에 로직이 길어질 때
//기저 사례 조건을 먼저 쓰고 그 밑에 긴 로직을 쓰는 것이 좋다
// bad
function upgradeUser(user) {
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// 변수에 값을 할당하는 함수
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// 함수는 var 변수와 같이 hoisting이 된다. 허나, first-class function은 되지 않는 거 같다.
// a function expression is created when the execution reaches it.

const print = function () { //anonymous function >> 함수에 이름이 없는 것
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer){
    if (answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
const printYes = function () { //anonymous function
    console.log('yes!');
};
const printNo = function print() { //named function
    console.log('no!');
};
// named function
// better debugging in debugger's stack traces
// recursions(재귀 호출)

randomQuiz('wrong');
randomQuiz('love you');

// Arrow function
// always anonymous >> anonymous function만 가능하다
const simplePrint = function(){
    console.log('simplePrint!');
};
// 간결하게 아래와 같이 나타낼 수 있다.
//const simplePrint = () => console.log('simplePrint!');

const add = function (a, b){
    return a + b;
}
//const add = (a, b) => a + b;
//변수 선언 = (매개변수) => 리턴 값;
//리턴하기 위한 body 부분이 길어질 때
//{}을 써서 body를 아래와 같이 구현한다.

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언하는 동시에 호출
(function hello() {
    console.log('IIFE');
})();

//일반 function과 first-class function의 차이를 확인하기 위해
printThis();

function printThis(){
    console.log(`this`);
}
//this를 출력함
printThis2();

const printThis2 = function(){
    console.log('this');
}
//this를 출력하지 않음