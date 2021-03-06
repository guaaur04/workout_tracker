var express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutplanner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.get('/', (req, res) => {
  res.send("TEsting If you SEE THIS u r ready");
  res.sendFile("/index.html")
})

//SEED DATA
const seedExercise = [
  {
    name: "Plank",
    type: "Core",
    weight: 10,
    sets: 3,
    reps: 1,
    duration: 60,
    distance: 0,
    isCardio: false
  },

  {
    name: "Run",
    type: "Cardio",
    weight: 0,
    sets: 0,
    reps: 0,
    duration: 5,
    distance: 10,
    isCardio: true

  },

  {
    name: "High Kicks",
    type: "Cardio",
    weight: 0,
    sets: 3,
    reps: 10,
    duration: 5,
    distance: 0,
    isCardio: true

  }
]

//Workout to days of the week
app.get('/seedplans', (req, res) => {
  db.Exercise.create(seedExercise)
    .then(result => {
      console.log(result)
      db.Workout.create([
        {
          name: 'Monday',
          exercise: [
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id
          ]
        },

        {
          name: 'Tuesday',
          exercise: [
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id
          ]
        },

        {
          name: 'Wednesday',
          exercise: [
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id
          ]
        },

        {
          name: 'Thursday',
          exercise: [
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id
          ]
        },

        {
          name: 'Friday',
          exercise: [
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id,
            result[Math.floor(Math.random() * result.length)]._id
          ]
        },
      ])
        .then(fullRes => {
          res.json(fullRes)
        })
        .catch(err => {
          res.json(err)
        })
    })
    .catch(err => {
      res.json(err)
    })
})

//View Workouts

app.get('/api/workout', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.send(err);
    })
})

//View Exercise 

app.get('/api/exercise', (req, res) => {
  db.Exercise.find({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      console.log(err)
      res.send(err);
    })
})

//Populated Exercises 
app.get('/populatedExercise', (req, res) => {
  db.Workout.find({})
    .populate('exercise')
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      console.log(err)
      res.send(err);
    })

})


//Create Workout
app.post("/api/workout", ({ body }, res) => {
  console.log(body);
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.send(err);
    });
});

//Create Exercise 
app.post('/api/exercise', ({ body }, res) => {
  console.log(req.body);
  db.Exercise.create(body)
    .then(dbExercise => {
      console.log(dbExercise._id)
      // db.Exercise.findByIdAndUpdate(body.id, { $push: { exercise: dbExercise._id } })
      db.Workout.findOneAndUpdate({_id:req.body.workoutId}, { $push: { exercise: dbExercise._id } })
        .then(dbWorkout => res.send(dbWorkout))
    })

    .catch(err => res.json(err))

})

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});