const express = require("../node_modules/express");
const router = express.Router();
const candroute = require("../models/candlist");

 

router.get("/get", async(req , res) => {
    try{
        const input = await candroute.find();
        res.append("Access-Control-Allow-Origin","*");

        res.json(input);
    } catch(err){
        res.send('error'+err);
    }
    });
// router.get('/',candroute.findOne({
//     Name:"vel"
// }));

// router.post("/", (req, res) => {
//     res.send("list is working");
//     console.log(req.body);
// });

router.post("/add", (req , res) => {
    const { Name, Party_Name, Party_Id, Posting,  Age,  VoterId_No, Membership_Id, Qualification, Address,  Occupation,  Nationality   } = req.body;
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