'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    //constructor
    constructor(name, age){//생성자
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 설정에 해당하는 값을 받아오는 2번째
    get age(){
        //age라는 프로퍼티는 다음 리턴값을 반환한다
        return this._age;
    }
    // 설정을 첫 번째
    set age(value){// this.age의 초기 설정을 한다.
        // age라는 프로퍼티에 age라는 value를 받아온다
        // 
        if (value < 0){
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve','Job',3);
console.log(user1.age);

// 3. Fields(public, private)
// Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(3);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Interitance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
class Triangle extends Shape {//오버라이딩
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);//왼쪽에 있는 인스턴스가 해당 클래스를 사용해서 만들어진 오브젝트인지 체크
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
