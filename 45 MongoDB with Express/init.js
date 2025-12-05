const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "Rishabh",
        to: "Abhi",
        msg: "Hello Abhi, How are you?",
        created_at: new Date()
    },
    {
        from: "Abhi",
        to: "Rishabh",
        msg: "I am good, Rishabh. How about you?",
        created_at: new Date()
    },
    {
        from: "Rishabh",
        to: "Abhi",
        msg: "Doing great! Let's catch up sometime.",
        created_at: new Date()
    },
    {
        from: "Abhi",
        to: "Rishabh",
        msg: "Sure! Let's plan for the weekend.",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);
