// async function greet() {
//     throw "404 Page not found";
//     return "Hello, World!";
// }

// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("result was: ", result);
// })
// .catch((err) => {
//     console.log("Promise was rejected with error: ", err)
// });

// let demo = async () => {
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`Color changed to ${color}!`);
//             resolve("Color changed");
//         }, delay);
//     });
// }
// async function rainbow() {
//     await changeColor("violet", 1000);
//     await changeColor("indigo", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("orange", 1000);
//     changeColor("red", 1000);
//     // await changeColor("purple", 1000);
// }

// let jsonRes = '{"fact":"The cat appears to be the only domestic companion animal not mentioned in the Bible.","length":84}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name: "Nirma J Mali",
//     age: 21,
//     marks: 99
// }

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res) => {
//     // console.log(res.json());
//     // res.json().then((data) => {
//     //     console.log(data);
//     // });
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// });
// console.log("I am Happy");

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await fetch(url);  
//         let data = await res.json();
//         console.log(data);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2);
//     } catch(e) {
//         console.log("ERROR - ", e);
//     }
//     console.log("Bye!!");
// }

//Using Axios
// TO Get Random Cat Facts
// let url = "https://catfact.ninja/fact";
// let btn1 = document.querySelector("#button1");
// btn1.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("ERROR - ", e);
//         return "No Cat Fact Found";
//     }
// }

// To Get Random Dog Images
// let btn = document.querySelector("#button2");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     let img = document.querySelector("#result2");
//     img.setAttribute("src", link);
//     img.style.width = "300px";
//     img.style.height = "300px";
//     // console.log(link);
// })
// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//        return res.data.message;
//     } catch(e) {
//         console.log("ERROR - ", e);
//         return "No Dog Image Found";
//     }
// }

// To Get Colleges by Country
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=> {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let collArr = await getColleges(country);
//     show(collArr);
// });
// function show(collArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of collArr) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
    
// }
// async function getColleges(country) {
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     } catch(e) {
//         console.log("ERROR - ", e);
//         return [];
//     }
// }