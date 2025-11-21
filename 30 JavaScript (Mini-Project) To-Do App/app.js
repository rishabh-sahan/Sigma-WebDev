// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("Div Clicked");
// });
// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("UL Clicked");
// });
// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("LI Clicked");
//     });
// }

// To-Do List JS Functionality Code
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");
// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");
//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = ""; 
// });
// ul.addEventListener("click", function(event) {
//     if(event.target.nodeName === "BUTTON") {
//         let listItem =event.target.parentElement;
//         listItem.remove();
//         console.log("Delete");
//     }
// });

