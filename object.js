'use strict';
// Objects
// One of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
//object = { key : value }의 집합체

// 1. Literals and properties

const name = 'ellie';
const age = 4;
print(name, age);
function print(name,age){
    console.log(name);
    console.log(age);
}
//오브젝트를 이용하면 아래와 같이 수월해진다.
const ellie = {name: 'ellie', age: 4};
function print2(person){
    console.log(person.name);
    console.log(person.age);
}
print2(ellie);

//object 만드는 법
//1. 'object literal' syntax
const obj1 = {};
//2. 'object constructor' syntax
const obj2 = new Object();

const ellie2 = {name: 'ellie', age: 4};
print2(ellie2);


//dynamically typed language
//동적인 코딩이 가능하지만 유지보수의 어려움이 있어서
//가급적 사용을 하지 않는 것이 좋다
//생성과 추가
ellie2.hasJob = true;
console.log(ellie2.hasJob);

delete ellie2.hasJob;
console.log(ellie2.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);//배열처럼 접근이 가능, computed properties
ellie2['hasJob'] = true;
console.log(ellie2.hasJob);

// computed properties는 이럴 때 쓴다
function printValue(obj, key){
    console.log(obj[key]);
    //이렇게 하면 실시간으로 어떤 key를 받아오는지에 대해 받아서 obj안에 해당하는 property의 값을 반환한다.
    //console.log(obj.key);는
    //obj 안에 key라는 property를 찾는 것이다.
}
//key는 항상 string type으로
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age){
    return{
        name,
        age,
    };
}

// 4. Constructor Function
const person5 = new Person('Tom', 5);
console.log(person5);
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
//오브젝트 안에 키의 유무를 확인
console.log('name' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie2){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(let value of array){
    console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
//user2의 이름을 바꾸었는데 user의 이름까지 바뀌는 일이 일어난다.
//user와 user2가 가리키는 object가 같기 때문이다.

//old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.log(user3);

//new way
const user4 = {};
Object.assign(user4, user);
// == const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
// blue, big
// 뒤에 나오는 property가 있을 수록 앞에 있던 property를 덮어씌운다.