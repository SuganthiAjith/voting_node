const express = require("../node_modules/express");
const router = express.Router();
const zoneroute = require("../models/zonelist");

 

router.get("/get", async(req , res) => {
    try{
        const input = await zoneroute.find();
        res.append("Access-Control-Allow-Origin","*");
        res.json(input);
    } catch(err){
        res.send('error'+err);
    }
    });
router.post("/add", (req , res) => {
    const {zone_Name , candidate_Name , party_Name} = req.body;
    console.log(req.body);

    const new_list = new zoneroute({
        zone_Name, candidate_Name , party_Name
    });
    new_list.save().then((list) => {
        res.send(list);
        console.log("Added list");
    });
});

module.exports = router;