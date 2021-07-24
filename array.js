'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
// 4. Additon, deletion, copy

// push: add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);
// pop: remove an item from end
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('🍒');
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.splice(1, 1);
//원하는 개수를 지정하지 않으면 지정한 index부터 다 지워버린다
console.log(fruits);

fruits.splice(1, 1, '🍏','🍉');
console.log(fruits);

// combine two arrays 
const fruits2 = ['🥝','🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));

// includes
console.log(fruits.includes('🍎'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));