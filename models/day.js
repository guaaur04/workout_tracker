const mongoose = require("mongoose");

const Schema = mongoose.Schema; 


const DaySchema = new Schema({

name: String,
workouts: [{
    type: Schema.Types.ObjectId,
    ref: 'Workout'
}]

    })

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout; 
