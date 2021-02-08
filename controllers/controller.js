const express = require("express");
const router = express.Router();
const excercies = require("../models/exercise");
const workout  = require("../models/workout");



//router.get

//router.get("/add_excercise")

//router.post("/edit_excercise")

//router.post("/api/workout")


const router = require("../routes/api");

router.get("/", (req.res) => {
    console.log(workout)
}

module.exports = router; 
