const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.get("/", () => {})

app.use(express.static("public"))



app.get("/about", (req, res, next) => {
    // console.log(req);
    console.log("a request on the ABOUT page was received...")


    res.send("this is your about page");
})

app.get("/about", () => {
    res.send("this is your about page");
})



app.listen(3001, () => {
    console.log("server listening to requests")
});