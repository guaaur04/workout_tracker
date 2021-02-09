const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { db } = require("./models/workout");

const PORT = process.env.PORT || 3000
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//View workout

app.get('/api/workout', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.send(err);
  });
});

//View exercise 

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

// app.post("/submit", ({ body }, res) => {
//   User.create(user)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

//Create workout
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

//Create exercise 
app.post('/api/exercise', (req, res) => {
  console.log(req.body);

  db.Excercise.create(req.body)
    .then(dbExercise => {
//Add the exercise to the workout database
      db.Workout.findOneAndUpdate({ _id: req.body.workoutId }, { $push: { exercise: dbExercise._id }})
        .then(dbWOrkout => res.send(dbWOrkout))
    })

    .catch(err => res.json(err))

})

//Delete

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});