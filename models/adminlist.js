const mongoose = require("mongoose");


const adminlist = mongoose.Schema({
    User_Name: {
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
   
});

module.exports = mongoose.model("admin_list",adminlist);