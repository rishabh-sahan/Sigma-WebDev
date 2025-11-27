const mongoose = require("mongoose");

main()
 .then(() => { 
  console.log("Connection Successful");
 })
 .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

User.insertMany([
    {name: "Abhishek", email: "abhishek@gmail.com", age: 22},
    {name: "Gagan", email: "gagan@gmail.com", age: 25},
    {name: "Vikas", email: "vikas@gmail.com", age: 28},
]).then((res) => {
    console.log(res);
});

// const user2 = new User({
//     name: "Sahan",
//     email: "sahan@gmail.com",
//     age: 20
// });

// user2
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });