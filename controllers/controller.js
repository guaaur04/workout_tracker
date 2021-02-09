const express = require("express");
const router = express.Router();
const db = require("../models");


//Route to index page 
router.get("/", (req, res) => {
    res.send("HELLO");
});


//Post Exercise 
router.post("/exercise", (req,res) => {
    res.send("HELLO");
    Exercise.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
});

//Post Workout


module.exports = router; 
