    const express = require("express");
    const routes = express.Router();
    const modelfile = require("../model/model");

    routes.get("/", (req,res)=>{
        res.json("Welcome to the MERN Task...");
    })

    routes.post("/pushing", async (req,res)=>{
        try {
            const pushingdata = new modelfile(req.body);
            await pushingdata.save();
            res.json("Data added to mongodb successfully...")
        } catch (error) {
            console.log(error);    
        }
    })

    routes.get("/getting", async (req,res)=>{
        try {
            const gettingfromdb = await modelfile.find()
            res.json(gettingfromdb)    
        } catch (error) {
            console.log(error);    
        }
    })

    module.exports = routes