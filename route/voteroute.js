const express = require("../node_modules/express");
const router = express.Router();
const voteroute = require("../models/votelist");

 

router.get("/get", async(req , res) => {
    {
        const input = await voteroute.find();
        res.append("Access-Control-Allow-Origin","*");
        res.json(input);
    } 
    });
router.post("/add", (req , res) => {
    const {candidate_Name , zone_Name , vote} = req.body;
    console.log(req.body);

    const new_list = new voteroute({
     candidate_Name , zone_Name, vote
    });
    new_list.save().then((list) => {
        res.send(list);
        console.log("Added list");
    });
});

module.exports = router;