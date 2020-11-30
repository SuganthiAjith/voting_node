const mongoose = require("mongoose");
const zonelist = mongoose.Schema({
    zone_Name: {
        type: String,
        required: true,
    },
    candidate_Name:{
        type: String,
        required: true,
    },
    party_Name:{
        type: String,
        required: true,
    }
   
});

module.exports = mongoose.model("zone_list",zonelist);