const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/traininsane");

const workouts = [
  {
    name: "Leg Blast",
    likes: 150,
    exercises: [
      {
        name: "Leg Extension",
        sets: 3,
        reps: 15,
        notes: "",
      },
      {
        name: "Leg Curls",
        sets: 3,
        reps: 15,
        notes: "Drop set.",
      },
    ],
  },
  {
    name: "Back and Bi's",
    likes: 201,
    exercises: [
      {
        name: "Back Extension",
        sets: 4,
        reps: 15,
        notes: "With a barbell",
      },
    ],
  },
  {
    name: "Glutes n Hammies",
    likes: 53,
    exercises: [
      {
        name: "Adductors",
        sets: 3,
        reps: 30,
        notes: "",
      },
      {
        name: "Leg Curls",
        sets: 3,
        reps: 20,
        notes: "",
      },
    ],
  },
  {
    name: "Chest and Tri's",
    likes: 71,
    exercises: [
      {
        name: "Machine Chest Press",
        sets: 3,
        reps: 20,
        notes: "",
      },
      {
        name: "Seated Chest Flys",
        sets: 3,
        reps: 15,
        notes: "",
      },
      {
        name: "Assisted Dips",
        sets: 3,
        reps: 20,
        notes: "",
      },
    ],
  },
];

function seedDB() {
  for (let i = 0; i < workouts.length; i++) {
    const aWorkout = workouts[i];
    const aWorkoutExercises = aWorkout.exercises;

    db.Exercises.insertMany(aWorkoutExercises)
      .then(exercisesFromDB => {
        const workout = {
          name: aWorkout.name,
          exercises: exercisesFromDB.map(exercise => exercise._id),
          likes: aWorkout.likes,
        };

        db.Workouts.create(workout).then(() =>
          console.log("Done creating a workout")
        );
      })
      .catch(error => console.log(error));
  }

  console.log("Done seeding db with workouts");
}

db.Workouts.remove({})
  .then(() => seedDB())
  .catch(err => {
    console.error(err);
  });
