const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");

app.set('view engine', 'ejs');

app.use(body_parser.json());


console.log("hjssdjhgidfhguyas");


app.get("/", (req, res) => {
    res.send("server created");
    console.log("hjsgduyas");
});

app.options("*", cors());
app.use(body_parser.json({ type: "application/*+json" }));
app.use(body_parser.raw({ type: "application/vnd.custom-type" }));
app.use(body_parser.text({ type: "text/html" }));


// import routes=======>

app.use("/candlist", require("./route/candroute"));
app.use("/adminlist", require("./route/adminroute"));
app.use("/zonelist", require("./route/zoneroute"));
app.use("/votelist", require("./route/voteroute"));
app.use("/partylist", require("./route/partyroute"));


mongoose.connect(
    "mongodb+srv://votingresult:votingresult@cluster0.kzswk.mongodb.net/votingdb?retryWrites=true&w=majority",
    { useNewUrlParser: true , useUnifiedTopology: true },
    ()=>{
        console.log("DB connected");
    });
 
app.listen(8000);

