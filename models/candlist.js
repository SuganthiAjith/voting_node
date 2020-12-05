const mongoose = require("mongoose");


const candlist = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Party_Name:{
        type: String,
        required: true,
    },
    Party_Id: {
        type: String,
        required: true,
    },
    Posting: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    VoterId_No: {
         type: String,
        required: true,},
    Membership_Id: {
        type: String,
        required: true,
    },
    Qualification:{
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
        // Door_No:{
        //     type: String,
        //     required: true,
        // },
        // Street_Name: {
        //     type: String,
        //     required: true,
        // },
        // City: {
        //     type: String,
        //     required: true,
        // },
        // Pincode: {
        //     type: Number,
        //     required: true,
        // },
    },
    Occupation:{
        type: String,
        required: true,
    },
    Nationality:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("candidate_list",candlist);