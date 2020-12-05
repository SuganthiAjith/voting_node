const express = require("../node_modules/express");
const router = express.Router();
const partyroute = require("../models/partylist");
const cors = require("cors");

 

router.get("/get", async(req , res) => {
    
        const input = await partyroute.find();
        res.append("Access-Control-Allow-Origin","*");
        res.json(input);
       
    });

    router.post("/add", cors(), (req , res) => {

        res.setHeader(
            "Access-Control-Allow-Headers",
            "X-Requested-With,content-type"
        );
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
    
        res.setHeader("Access-Control-Allow-Credentials", true);
        
        const { Party_Name, Party_Logo, Party_Head, MLA_Count , MP_Count } = req.body;
        console.log(req.body);
    
        const new_list = new partyroute({
            Party_Name, Party_Logo, Party_Head, MLA_Count , MP_Count    
        });
        new_list.save().then((list) => {
            res.send(list);
            console.log("Added list");
        });
    });
    
    module.exports = router;