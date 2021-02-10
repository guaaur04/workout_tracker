// const express = require("express");
// const db = require("../models");
// const router = express.Router();


// //Route to index page 
// router.get("/", (req, res) => {
//     res.send("TEsting If you SEE THIS u r ready");
// });

// router.post("/workout", (req, res) => {
//     db.Workout.create({name:req.body.name})
    
// }

// //Create new Exercise 
// router.post("/exercise", (req,res) => {
//     res.send("HELLO");
//     db.Exercise.create(req.body).then(data => {
//         res.json(data);
//     }).catch(err => {
//         console.log(err);
//     });
// });

// //Post Workout


// //Update a Workout 
// router.put("/workout/:id", (req, res) => {
//     Workout.update(req.body, {
//         where: {
//             id: req.params.id
//         }
//     })
// })

// module.exports = router; 
