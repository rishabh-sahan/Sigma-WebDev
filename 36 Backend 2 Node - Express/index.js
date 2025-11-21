const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello, i am root");
});

// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path");
// });

// app.get("/mango", (req, res) => {
//     res.send("You contacted mango path");
// });

// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("You sent a post request to root");
// });

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("Hello, i am root");
// });

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("No Results");
// })

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`<h1>Search results for query: ${q}</h1>`);
})

// app.use((req, res) => {
    // console.log(req);
    // console.log("Request received");
    // res.send({
    //     Name: "Apple",
    //     Color: "Red"
    // });
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>";
//     res.send(code);
// });


