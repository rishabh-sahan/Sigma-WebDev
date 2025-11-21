// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//     alert("Button Clicked!!");
// }

// let btns = document.querySelectorAll('button');
// for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function() {
    //     console.log("Mouse Entered!!");
    // };
    // console.dir(btn);
    // btn.onclick = sayName;
    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);
//     btn.addEventListener('dblclick', function() {
//         console.log("Double Clicked!!");
//     });
// }

// function sayHello() {
//     alert("Hello World!!");
// }
// btn.onclick = sayHello;
// function sayName() {
//     alert("Rishabh Here!!");
// }


//Random Color Generator Code
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     let h3 = document.querySelector('h3');
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomColor;
//     console.log("Color Updated!!");
// });
// function getRandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let color = `RGB(${red}, ${green}, ${blue})`;
//     return color;
// }

// let p = document.querySelector('p');
// p.addEventListener('click', function() {
//     console.log("Paragraph Clicked!!");
// });
// let box = document.querySelector('.box');
// box.addEventListener('mouseenter', function() {
//     console.log("Mouse inside box!!");
// });

// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener('click', changeColor);
// p.addEventListener('click', changeColor);
// h1.addEventListener('click', changeColor);
// h3.addEventListener('click', changeColor);

// let btn = document.querySelector('button');
// btn.addEventListener('click', function(event) {
//     console.dir(event);
//     console.log("Button Clicked!!");
// });
// btn.addEventListener('dblclick', function(event) {
//     console.dir(event);
//     console.log("Button Clicked!!");
// });

// let inp = document.querySelector('input');
// inp.addEventListener('keydown', function(event) {
    // console.log(event);
    // console.log(event.key);
    // console.log(event.code);
    // console.log("Key Pressed!!");
// });
// inp.addEventListener('keyup', function() {
//     console.log("Key Released!!");
// });

// let inp = document.querySelector('input');
// inp.addEventListener('keydown', function(event) {
//     console.log("code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     if(event.code === "ArrowUp") {
//         console.log("Character Moves Forward!!");
//     } else if(event.code === "ArrowDown") {
//         console.log("Character Moves Backward!!");
//     } else if(event.code === "ArrowLeft") {
//         console.log("Character Moves Left!!");
//     } else if(event.code === "ArrowRight") {
//         console.log("Character Moves Right!!");
//     }
// });

// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert("Form Submitted!!");
// });

// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let user = document.querySelector('#user');
//     let pass = document.querySelector('#pass');
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, Your Password is set to ${pass.value}`);
// });

// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// });
// let user = document.querySelector('#user');
// user.addEventListener("change", function() {
//     console.log("change event!!");
//     console.log("final value = ", this.value);
// });
// user.addEventListener("input", function() {
//     console.log("input event!!");
//     console.log("final value = ", this.value);
// });

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");
// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText = inp.value;
// });