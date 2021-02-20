const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const ExerciseSchema = new Schema({

name: String,
type: String,
weight: String,
sets: Number,
reps: Number,
duration: String, 
distance: String,
isCardio: Boolean

    })

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise; 
