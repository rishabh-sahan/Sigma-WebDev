// function hello() {
//     console.log("Inside hello function");
//     console.log("hello");   
// }

// function demo() {
//     console.log("Calling hello function");
//     hello();
// }

// console.log("Calling demo function");
// demo();
// console.log("Done Bye!!"); 

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

// setTimeout(() => {
//     console.log("Apna College");
// }, 2000);
// setTimeout(() => {
//     console.log("Hello World");
// }, 2000);
// console.log("Hello...");

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("yellow", 1000, () => {
//                     changeColor("purple", 1000, () => {
//                     });
//                 });
//             });
//         });
//     });
// }); // Callback Nesting -> Callback Hell

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("Apna College", () => {
//     console.log("Success: Your data was saved");
//     savetoDb("Hello World", () => {
//         console.log("Success2: data2 saved");
//     }, () => {
//         console.log("Failure2: Weak Connection"); 
//     });
// }, () => {
//     console.log("Failure: Weak Connection, data not saved");
// });

// function savetoDb(data) {
//     return new Promise((resolve, reject)=> {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success: Your data was saved");
//         } else {
//             reject("Failure: Weak Connection");
//         }
//     });
// }
// savetoDb("Apna College")
// .then((result) => {
//     console.log("data1 saved");
//     console.log(result);
//     return savetoDb("helloworld");
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log(result);
//     return savetoDb("Nirma");
// })
// .catch((result) => {
//     console.log("data3 saved");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("Promise was rejected");
//     console.log(error);
// });

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color changed");
//         }, delay);
//     });
// }
// changeColor("red", 1000)
// .then(() => {
//     console.log("Color changed to red");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("Color changed to orange");
//     return changeColor("green", 1000);
// })
// .then(() => {
//     console.log("Color changed to green");
//     return changeColor("blue", 1000);
// })
// .then(() => {
//     console.log("Color changed to blue");
// });

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("yellow", 1000, () => {
//                     changeColor("purple", 1000, () => {
//                     });
//                 });
//             });
//         });
//     });
// });