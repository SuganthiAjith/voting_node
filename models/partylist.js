const mongoose = require("mongoose");


const partylist = mongoose.Schema({
    Party_Name: {
        type: String,
        required: true,
    },
    Party_Logo:{
        type: String,
        required: true,
    },
    Party_Head:{
        type: String,
        required: true,
    },
    MLA_Count:{
        type: String,
        required: true,
    },
    MP_Count:{
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("Party_list",partylist);
