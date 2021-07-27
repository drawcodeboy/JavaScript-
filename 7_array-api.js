'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    //my answer
    //let fruitsString = fruits[0] + fruits[1] + fruits[2];
    //console.log(fruitsString);
    const fruitsString2 = fruits.join();
    console.log('Q1');
    console.log(fruitsString2);
}

  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    //my answer
    const fruits2 = fruits.slice();
    console.log('Q2');
    console.log(fruits2);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    //my answer
    const array2 = array.reverse();
    console.log('Q3');
    console.log(array2);
}

  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    //my answer
    const array2 = array.slice(2, 5);
    console.log('Q4');
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
  //my answer
  console.log('Q5');
  for(let i = 0; i < students.length; i++){
    if(students[i].score === 90){
      console.log(students[i].name);
    }
  }
}

  // Q6. make an array of enrolled students
{
  console.log('Q6');
  const enrolledArray = new Array();
  for(let i = 0; i < students.length; i++){
    if (students[i].enrolled == true){
      enrolledArray.push(students[i]);
    }
  }
  for(let i = 0; i < enrolledArray.length; i++){
    console.log(enrolledArray[i].name);
  }
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
  //my answer
  console.log('Q7');
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  console.log(newArray);
}

  // Q8. check if there is a student with the score lower than 50
{
  //my answer
  console.log('Q8');
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  
  for(let i = 0; i < newArray.length; i++){
    if(newArray[i] < 50){
      console.log('yes');
      //점수가 50이하인 학생이 있다.
      break;
    }
    else if(i === 4){
      console.log('no');
      //없다.
    }
  }
}

  // Q9. compute students' average score
{
  //my answer
  console.log('Q9');
  let scoreSum = 0;
  let average;
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    scoreSum += students[i].score;
  }
  average = scoreSum/(students.length);
  console.log(average);
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
  //my answer
  console.log('Q10');
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  const newArray2 = newArray.join();
  console.log(newArray2);
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
  //my answer
  console.log('Bonus');
  const newArray = new Array();
  for (let i = 0;  i < students.length; i++){
    newArray.push(students[i].score);
  }
  newArray.sort();
  const newArray2 = newArray.join();
  console.log(newArray2);
}