const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3000
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutplanner", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get('/', (req, res) => {
  res.send("TEsting If you SEE THIS u r ready");
  res.sendFile("/index.html")
})

//SEED DATA
const seedWorkouts = [
  {
    name: "Plank",
    type: "Core",
    weight: 10,
    sets: 3,
    reps: 1,
    duration: 60,
    distance: 0
  },

  {
    name: "Run",
    type: "Cardio",
    weight: 0,
    sets: 0,
    reps: 0,
    duration: 5,
    distance: 10

  }
]

//Workout to days of the week
app.get('/seedplans', (req, res) => {
  db.Workout.create(seedWorkout)
    .then(result => {
      console.log(result)
      db.Day.create([
        {
          name: 'Monday',
          Workout: [
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

//View workouts

app.get('/api/workout', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
  console.log(err)
  res.send(err);
});

//View Exercise 

app.get('/api/exercise', (req, res) => {
  db.Exercise.find({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      console.log(err)
      res.send(err);
    });
});

//Days corresponding to workout 
app.get('/api/days', (req,res) => {
  db.Day.find({})
  .then(dbDay => {
    res.json(dbDay)
  })
  .catch(err => {
    console.log(err)
    res.send(err);
  })
})

//Populated Exercises 
app.get('/populatedExercises', (req, res) => {
  db.Exercise.find({})
    .populate('exercise')
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      console.log(err)
      res.send(err);
    })

})

//Post to Days
app.post('/api/days', ({ body }, res) => {
  db.Day.create(body)
  .then(dbDay => {
    res.json(dbDay)
  })
  .catch(err => {
    console.log(err)
    res.send(err);
  })
})

//Create Workout
app.post("/api/workouts", ({ body }, res) => {
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
app.post('/api/exercise', (req, res) => {
  console.log(req.body);
   db.Excercise.create(req.body)
    .then(dbExercise => {
      //Update Workout Database
      db.Workout.findOneAndUpdate({ _id: req.body.workoutId }, { $push: { exercise: dbExercise._id } })
        .then(dbWOrkout => res.send(dbWOrkout))
    })

    .catch(err => res.json(err))

})

//Delete 


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});