const mongoose = require("mongoose");

const mongodbformat = new mongoose.Schema({
    myname: {
        type: String,
        required: true,
        trim: true
    },
    myemail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
}, { timestamps: true });

const mongodbexport = mongoose.model("Info", mongodbformat);

module.exports = mongodbexport;