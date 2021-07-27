'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    //my answer
    //let fruitsString = fruits[0] + fruits[1] + fruits[2];
    //console.log(fruitsString);
    const fruitsString2 = fruits.join();
    console.log(fruitsString2);
}

  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    //my answer
    const fruits2 = fruits.slice();
    console.log(fruits2);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    //my answer
    const array2 = array.reverse();
    console.log(array2);
}

  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    //my answer
    const array2 = array.slice(2, 5);
    console.log(array2);
}

class Student {
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{
}

  // Q6. make an array of enrolled students
{
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
}

  // Q8. check if there is a student with the score lower than 50
{
}

  // Q9. compute students' average score
{
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
}