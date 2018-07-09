const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/traininsane"
);

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// API Route to create a workout => BuildAWorkout Component
// A workout or exercise does not have to be unique
app.post("/workouts", (req, res) => {
  //name of workout, array of exercises
  //exercise name, # of sets, # of reps, optional notes
  if (!req.body.name || !req.body.exercises) {
    return res.json({
      status: "Valid name and exercises required.",
    });
  }

  // Save the exercises, get all their ids then save the workout with exercises:[of exercises ids]
  db.Exercises.insertMany(req.body.exercises)
    .then(exercisesFromDB => {
      const workout = {
        name: req.body.name,
        exercises: exercisesFromDB.map(exercise => exercise._id),
      };

      db.Workouts.create(workout).then(() =>
        res.json({ status: "Done creating workout" })
      );
    })
    .catch(error => res.status(500).json({ error }));
});

// API Route to get all the workouts with their exercises => WorkoutsLibrary Component
app.get("/workouts", (req, res) => {
  db.Workouts.find({})
    .populate("exercises")
    .then(populatedWorkoutsFromDB => res.json(populatedWorkoutsFromDB))
    .catch(error => res.status(500).json({ error }));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
