const express = require("../node_modules/express");
const admin = express.Router();
const adminroute = require("../models/adminlist");

admin.get("/get", async(req , res) => 
    {
        const input = await adminroute.find();
        // res.render('sample', {input});
         res.append("Access-Control-Allow-Origin","*");
         res.json(input);
    });

    admin.post("/add", (req , res) => {
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