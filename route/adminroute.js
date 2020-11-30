const express = require("../node_modules/express");
const admin = express.Router();
const adminroute = require("../models/adminlist");



admin.post("/", (req, res) => {
        res.send("list is working");
        console.log(req.body);
    });


    admin.post("/addadmin", (req , res) => {
        const { User_Name, Password, } = req.body;
        console.log(req.body);
    
        const new_adminlist = new adminroute({
            User_Name, Password,
        });
        new_adminlist.save().then((list) => {
            res.send(list);
            console.log("Added list");
        });
    });
    
    module.exports = admin;