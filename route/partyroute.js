const express = require("../node_modules/express");
const router = express.Router();
const partyroute = require("../models/partylist");

 

router.get("/get", async(req , res) => {
    try{
        const input = await partyroute.find();
        res.json(input);
    } catch(err){
        res.send('error'+err);
    }
    });

    router.post("/add", (req , res) => {
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