//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1);// add
console.log(1 - 1);// substract
console.log(1 / 1);// divide
console.log(1 * 1);// multifly
console.log(5 % 2);// remainder
console.log(2 ** 3);// exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// 1)counter = counter + 1;
// 2)preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

counter = 2;
const postIncrement = counter++;
// 1)postIncrement = counter;
// 2)counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment Operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Compare operator
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operator: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 1;

//|| (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
//++호출하는 순서를 제일 가벼운 것부터

//&& (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
//object가 null인지 알아내기 위해서 쓰인다
//often used to compress long if-statement
//nullableObject && nullObject.something
/*
if(nullObject != null){
    nullObject.something;
}
*/

//!(not)
console.log(`not: ${value1}`);

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('😂');
    }
    return true;
}

//7. Equality Operator
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
//type까지 신경써서 비교한다.
//strict equality를 사용하는 것이 좋다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie' };
const ellie2 = {name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);//각각 다른 reference에 저장되어있기 때문에 다르다. false
console.log(ellie1 === ellie2);//똑같은 type이든 아니든 reference가 다르기 때문에 false
console.log(ellie1 == ellie3);//ellie3는 ellie1의 reference를 그대로 가져왔기 때문이다. true
console.log(ellie1 === ellie3);

//8. Conditional operators: if
//if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else{
    console.log('Unknown');
}

//9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//block을 먼저 실행시키고 싶다면 do while
//조건을 먼저 확인한 뒤에 실행시키고 싶다면 while

//for loop, for(begin: condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2){//지역변수 선언
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nasted loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
for(let i = 0; i <= 10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}

for(let i = 0; i <= 10; i++){
    if(i > 8){
        break;
    }
    console.log(i);
}