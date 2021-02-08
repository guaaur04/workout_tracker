const express = require("express");
const router = express.Router();
const excercies = require("../models/exercise");
const workout  = require("../models/workout");

router.get("/", (req,res) => {
    res.render("index",(workout: workout));
}); 



const router = require("../routes/api");

router.get("/", (req.res) => {
    console.log(workout)
}