const mongoose = require("mongoose");
const votelist = mongoose.Schema({
    candidate_Name: {
        type: String,
        required: true,
    },
    zone_Name:{
        type: String,
        required: true,
    },
    vote:{
        type: String,
        required: true,
    }
   
});

module.exports = mongoose.model("vote_list",votelist);