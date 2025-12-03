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

User.findByIdAndDelete("69281858deb27dd196048351").then(res => {
    console.log(res);
})

// User.findOneAndUpdate({name: "Sahan"}, {age: 21}, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.findById("692817fbf38ebb6b42413306")
//  .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name: "Abhishek", email: "abhishek@gmail.com", age: 22},
//     {name: "Gagan", email: "gagan@gmail.com", age: 25},
//     {name: "Vikas", email: "vikas@gmail.com", age: 28},
// ]).then((res) => {
//     console.log(res);
// });

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