// console.log("Rishabh Jain");
// console.log("Nirma Mali");
// let a = 25;
// let b = 23;
// console.log("Sum is:", a+b);

// let pencil = 10;
// let pen = 5;
// let output = "The total bill amount is : " + (pencil + pen) + " Rs.";
// let output = `The total price is : ${pencil + pen} Rupees.`;
// console.log(output);

//Arithmetic Operators
// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b); //modulus operator
// console.log(a**b); //exponentiation operator

//Unary Operators
// let a = 10;
// let b = 5;
// console.log(a++);
// console.log(++a);

//Assignment Operators
// let a = 10;
// let b = 5;
// b = a;
// console.log(b);

//Comparison Operators
// let age = 20;
// console.log(age > 18); //true
// console.log(age < 18); //false

//Conditional Statements
// let age = 20;
// if(age >= 18) {
//     console.log("You can vote!");
// } 
// if (age < 18) {
//     console.log("You cannot vote!");
// }

// let firstName = "Rishabh";
// if(firstName === "Rishabh") {
//     console.log(`Welcome ${firstName}`);
// } 

// let color = "yellow";
// if(color === "red") {
//     console.log("Stop! Light color is red.");
// } 
// if(color === "yellow") {
//     console.log("Get Ready! Light color is yellow.");
// }
// if(color === "green") {
//     console.log("Go! Light color is green.");
// }

// let marks = 85;

// if (marks >= 80) {
//     console.log("A+");
// } else if (marks >= 60) {
//     console.log("A");
// } else if (marks >= 33) {
//     console.log("B");
// } else if (marks < 33) {
//     console.log("F");
// }  

// let age = 21;

// if (age >= 18) {
//     console.log("You can vote!");
// } else {
//     console.log("You cannot vote!");
// }

// let color = "red";

// if(color === "red") {
//     console.log("Stop");
// } else if(color === "yellow") {
//     console.log("Slow Down");
// } else if(color === "green") {
//     console.log("Go");
// } else {
//     console.log("Traffic light is broken");
// }

// Create a system to calculate popcorn prices based on the Size Customer asked for:

// let size = "XL"
// if(size === "S") {
//     console.log("Popcorn price is Rs. 50");
// } else if(size === "M") {
//     console.log("Popcorn price is Rs. 100");
// } else if(size === "L") {
//     console.log("Popcorn price is Rs. 200");
// } else {
//     console.log("Popcorn price is Rs. 250");
// } 

// let marks = 85;

// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade : O");
//     } else {
//         console.log("Grade : A");
//     }
// } else {
//     console.log("Better luck next time!");
// }

// let str = "apple";
// if (str[0] === 'a' && str.length > 3) {
//     console.log("Good String");
// } else {
//     console.log("Bad String");
// }

// let num = 12;

// if((num%3 === 0) && (num+1 == 15) || (num-1 == 11)) {
//     console.log("Safe");
// } else {
//     console.log("Not Safe");
// }

// let day = 7;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong Day");
// }

// alert("Something is Wrong!");
// console.log("This is a simple log message.");
// console.error("This is an error message.");
// console.warn("This is a warning message.");

// let firstName = prompt("What is your name?");
// console.log(firstName);

// let firstName = prompt("What is your first name?");
// let lastName = prompt("What is your last name?");
// console.log("Welcome", firstName, lastName, "!");

// let msg = '    Rishabh    ';

// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);

// let name = "Rishabh";

// let msg = "ILoveNirma";

// let msg = "      ILoveNirma      ";
// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let msg = "RishabhJain"
// console.log(msg.slice(0, 7));
// console.log(msg.slice(7, msg.length));
// console.log(msg.slice(0,));
// console.log(msg.slice(-11));

// let str = "ILoveCoding";
// let newStr = str.replace("Love", "Do");

// let str = "Nimra";

//Practice Questions
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// let name = "ApnaCollege";
// console.log(name.slice(4, 9)); //Colle
// console.log(name.indexOf("na")); //2
// console.log(name.replace("Apna", "Our")); //OurCollege

// let students = ["Rishabh", "Nimra", "Abhishek"];
// let info = ["Nirma", 21, 9.6];
// let emptArr = [];

// let fruits = ["Apple", "Banana", "Orange"];
// fruits[1] = "Mango"; 

// let cars = ["BMW", "Audi", "Mercedes", "Volvo", "Toyota"];

// for (let i=5; i<=10; i++) {
//     console.log(i);
// }

// for(let i=5; i>=1; i--) {
//     console.log(i);
// }

//Print all odd numbers from 1 to 15
// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// }
// console.log("Backwaords");
// for(let i=15; i>=1; i=i-2) {
//     console.log(i);
// }

//Print all even numbers from 1 to 15
// for(let i=2; i<=10; i=i+2) {
//     console.log(i);
// }
// console.log("Backwaords");
// for(let i=10; i>=2; i=i-2) {
//     console.log(i);
// }

//Print the multiplication table of 5
// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }

// let n = prompt("Write the Table Number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// for(let i=1; i<=3; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++) {
//         console.log(j);
//     } 
// }

//while loop
// let i=5;
// while(i>=1) {
//     console.log(i);
//     i--;
// }

// let i=0;
// while (i<=20) {
//     console.log(i);
//     i++;
// }

// const favMovie = "KGF";

// let guessMovie = prompt("Guess the Movie Name");
// while((guessMovie != favMovie) && (guessMovie != "quit")) {
//     guessMovie = prompt("Wrong Guess, Try Again!!");
// }
// if (guessMovie == favMovie) {
//     console.log("You Guessed it Right!!");
// } else {
//     console.log("You Quit the Game!");
// }

// let i=1;
// while(i<=5) {
//     if(i==4) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("We used break at 4");

// let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
// for(let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
// for(let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }

// let heros = [ ["ironman", "spiderman", "thor"], ["flash", "superman", "wonder woman"] ];
// for(let i=0; i<heros.length; i++) {
//     console.log(`List #${i}`);
//     for(let j=0; j<heros[i].length; j++) {
//         console.log(heros[i][j]);
//     }
// }

// let students = [
//     ["Rishabh", 65],
//     ["Nimra", 99],
//     ["Abhishek", 45]
// ];
// for(let i=0; i<students.length; i++) {
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }

// let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
// for(fruit of fruits) {
//     console.log(fruit);
// }
// for (char of "Rishabh") {
//     console.log(char);
// }

// let heros = [["superman", "batman", "wonderwoman"], ["spiderman", "ironman", "thor"]];
// for (list of heros) {
//     for (name of list) {
//         console.log(name);
//     }
//     console.log(list);
// }

// To Do App
// let todo = [];
// let req = prompt("Please enter your request");

// while(true) {
//     if(req == "quit") {
//         console.log("Quitting app...");
//         break;
//     }
//     if(req == "list") {
//         console.log("**********");
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("**********");
//     } else if(req == "add") {
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("Task added!");
//     } else if(req == "delete") {
//         let idx = prompt("Please enter the task index");
//         todo.splice(idx, 1);
//         console.log("Task deleted!");
//     } else {
//         console.log("Invalid request");
//     }
//     req = prompt("Please enter your request");
// }

// let student = {
//     name: "Rishabh",
//     age: 21,
//     marks: 68
// }

// let student2 = ["Nirma", 21, 98];

// const item = {
//     price: 100.99,
//     discount: 50,
//     colors: ["red", "pink"];
// };


// const post = {
//     username: "@rishabh_sahan",
//     content: "This is my first post",
//     likes: 100,
//     reposts: 20,
//     tags: ["@apnacollege", "@coding"]
// }

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// }

// const student = {
//     name: "Rishabh",
//     age: 21,
//     marks: 68,
//     city: "Mandya"
// }

// const classInfo = {
//     rishabh: {
//         grade: "B+",
//         city: "Karanataka"
//     },
//     nirma: {
//         grade: "O",
//         city: "Rajasthan"
//     },
//     sahan: {
//         grade: "A",
//         city: "Gujarat"
//     }
// }

// const classInfo = [
//     {
//         name: "Rishabh",
//         grade: "B+",
//         city: "Karnataka"
//     },
//     {
//         name: "Nirma",
//         grade: "O",
//         city: "Rajasthan"
//     },
//     {
//         name: "Sahan",
//         grade: "A",
//         city: "Gujarat"
//     }
// ];

// Number Guessing Game
// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number"); 
// while(true) {
//     if(guess == "quit") {
//         console.log("User quit");
//         break;
//     } 

//     if(guess == random) {
//         console.log("You are right!");
//         break;
//     }else if (guess < random){
//         guess = prompt("Your guess was too low, Please try again");
//     } else {
//         guess = prompt("Your guess was too high, Please try again");
//     }
// }

//Functions
// function hello() {
//     console.log("Hello World!!");
// }
// hello();

// function print1to5() {
//     for(let i=1; i<=5; i++) {
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult() {
//     let age = 21;
//     if(age >= 18) {
//         console.log("adult");
//     } else {
//         console.log("not an adult");
//     }
// }
// isAdult();

// function printPoem() {
//     console.log("Twinkle Twinkle little star,");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
//     console.log("Twinkle Twinkle little star,");
// }
// printPoem();

//Create a function to roll a dice & always display the value of the dice(1 to 6)
// function rollDice() {
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random);
// }
// rollDice();

// function printName(name) {
//     console.log(name);
// }
// printName("Nirma");

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("Rishabh", 20);
// printInfo("Nirma", 21);
// printInfo("Abhishek");

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(5, 10);
// sum(100, 200);
// sum(1.5, 2.3);

// function clcAvg (a, b, c) {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
// }
// clcAvg(5, 10, 15);
// clcAvg(100, 200, 300);

// function printTable(n) {
//     for(let i=n; i<=n*10; i=i+n) {
//         console.log(i);
//     }
// }
// printTable(5);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 10));

// console.log(sum(sum(1, 2), 3));

// function getSum(n) {
//     let sum = 0;
//     for(let i=1; i<=n; i++) {
//         sum += i;
//     } 
//     return sum;
// }

// let str = ["Hi", "Hello", "Bye", "!!"];
// function concat(str) {
//     let result = "";
//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

// function calSum(a,b) {
//     let sum = a + b;
//     console.log(sum);
// }
// calSum(5, 10);

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }

// let greet = "hello";
// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// let name = "Rishabh";
// let x = 5;
// let sum = function(a,b) {
//     return a + b;
// }
// let hello = function() {
//     console.log("Hello");
// }
// hello = function() {
//     console.log("Hello");
// }

// function multipleGreet(func, count) {
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }
// let greet = function() {
//     console.log("Hello World");
// }
// greet();
// multipleGreet(function() {console.log("Hello World")}, 200);



// function oddOrEvenFactory (request) {
//     if(request == "odd") {
//         let odd = function(n) {
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     } else if(request == "even") {
//         let even = function(n) {
//             console.log(n%2 == 0);
//         }
//         return even;
//     } else {
//         console.log("Invalid Request");
//     }
// }

// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract: function(a, b) {
//         return a - b;
//     },
//     multiply: function(a, b) {
//         return a * b;
//     }
// }

// const student = {
//     name: "Rishabh",
//     age: 21,
//     eng: 95,
//     math: 85,
//     phy: 75,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// function getAvg() {
//     console.log(this);
// }

// console.log("Hello");
// console.log("Hello");
// let a = 10;
// try {
//     console.log(a);
// } catch {
//     console.log("Error caught");
// }
// console.log("Hello");
// console.log("Hello");

// const sum = (a, b) => {
//     console.log(a + b);
// }

// const cube = (n) => {
//     return n*n*n;
// }

// const pow = (a, b) => {
//     return a**b;
// }

// const hello = () => {
//     console.log("Hello World");
// }

// const mul = (a, b) => a * b;

// console.log("Hi There!!");
// setTimeout(() => {
//     console.log("Home");
// }, 4000);
// console.log("Welcome to");

// setInterval(() => {
//     console.log("Apna College");
// }, 2000);  

// const student = {
//     name: "Rishabh",
//     marks: 98,
//     prop: this, //global scope
//     getName: function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); //parents scope -> window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this); //student object
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout( function() {
//             console.log(this); //window 
//         }, 2000);
//     } 
// };
// const a = 5; 

// write an arrow function that returns the square of a nummber 'n'
// const square = (n) => n * n;
// console.log(square(5));

//Write a function that prints "Hello World" 5 times at intervals of 2s each.
// let id = setInterval(() => {
//     console.log("Hello World!!");
// }, 2000);
// setTimeout(() => {
//     clearInterval(id);
//     console.log("Stopped");
// }, 10000);

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => {
//     console.log(el);
// });

// arr.forEach(function(el) {
//     console.log(el);
// });

// let print = function (el) {
//     console.log(el);
// };
// arr.forEach(print);

// let arr = [
//     {
//         name: "Rishabh",
//         marks: 70,
//     },
//     {
//         name: "Nirma",
//         marks: 99,
//     },
//     {
//         name: "Abhishek",
//         marks: 45,
//     },
// ];
// arr.forEach((student) => {
//     console.log(student.marks);
// });

// let num = [1, 2, 3, 4, 5];
// let double = num.map((el) => {
//     return el * 2;
// });

// let students = [
//     {
//         name: "Rishabh",
//         marks: 70,
//     },
//     {
//         name: "Nirma",
//         marks: 99,
//     },
//     {
//         name: "Abhishek",
//         marks: 45,
//     },
// ];
// let cgpa = students.map((el) => {
//     return el.marks / 10;
// });

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter((el) => {
//     return el % 2 != 0;
// });

// [2, 4, 6].every((el) => el % 2 == 0); //true

// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el
// });
// console.log(finalVal); 

// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 11];
// let max = -1;
// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }        
// }
// console.log(max);

// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
// }
// });
// console.log(max);

// Check if all numbers in our array are multiples of 10 or not.

// let nums = [10, 20, 30, 40, 5];
// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);

//Create a function to find the min number in an array

// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//         if(min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }
// let nums = [10, 20, 30, 40, 5];

// let min = nums.reduce((min, el) => {
//     if(min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(min);

// function sum(a, b=2) {
//     return a + b;
// }

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

// let char = [..."Rishabh"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...odd, ...even];

// const data = {
//     email: "rishabhsahan@gmail.com",
//     password: "abcd1234",
// };

// const dataCopy = {...data, id: 135, country: "India"};

// let arr = [1, 2, 3, 4, 5];
// let obj1 = { ...arr };
// let obj2 = { ..."Rishabh"};

// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("You gave us: ", args[i]);
//     }
// }
// function min(a, b, c, d) {
//     console.log(arguments);
//     console.log(arguments.length);
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }
// function min(msg, ...args) {
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
// }

// let names = ["Nirma", "Rishabh", "Sahan", "Abhishek"];
// // let winner = names[1];
// // let runner = names[0];
// // let secondRunner = names[3];
// let [winner, runner, ...oters] = names;

// const student = {
//     name: "Rishabh",
//     age: 20,
//     class: 12,
//     subjects: ["eng", "math", "phy", "chem"],
//     username: "@rishabh_sahan",
//     password: "abcd1234",
// };
// let username = student.username;
// let password = student.password;
// let {username: user, password: secret, city = "Mandya"} = student;

