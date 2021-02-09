const mongoose = require("mongoose");

const Schema = mongoose.Schema; 


const WorkoutSchema = new Schema({

name: String,
    exercise: [{
    type: Schema.Types.ObjectId,
    ref: 'exercise'
}]

    })

const Workout = mongoose.model("exercise", WorkoutSchema)

module.exports = Workout; 
