// let arr = [1, 2, 3];
// let arr2 = [1, 2, 3];
// arr.sayHello = () => {
//     console.log("Hello!, i am arr");
// };
// arr2.sayHello = () => {
//     console.log("Hello!, i am arr");
// };

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return person;
// }

//Constructors - doesn't return anything & start with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// };

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("Rishabh", 20);
// let p2 = new Person("Sahan", 21);

// class Person {
//     constructor(name, age) {
//         console.log("Person Class Constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name, age, marks) {
//         console.log("Student Class Constructor");
//         super(name, age); //Parent class constructor is being called
//         this.marks = marks;
//     }   
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age); //Parent class constructor is being called
//         this.subject = subject;
//     }   
// }

class Mammal { //Base class / Parent Class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { //child
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("Woof Woof!");
    }
}

class Cat extends Mammal { //child
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("Meow Meow!");
    }
}