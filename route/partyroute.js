const express = require("../node_modules/express");
const router = express.Router();
const partyroute = require("../models/partylist");

 

router.get("/get", async(req , res) => {
    try{
        const input = await candroute.find();
        res.json(input);
    } catch(err){
        res.send('error'+err);
    }
    });

    router.post("/add", (req , res) => {
        const { Party_Name, Party_Logo, Party_Head,    } = req.body;
        console.log(req.body);
    
        const new_list = new candroute({
            Name, Party_Name, Party_Id, Posting,  Age,  VoterId_No, Membership_Id, Qualification, Address,  Occupation,  Nationality ,
        });
        new_list.save().then((list) => {
            res.send(list);
            console.log("Added list");
        });
    });
    
    module.exports = router;