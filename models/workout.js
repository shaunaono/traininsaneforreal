const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: { type: String, required: true },
  likes: { type: Number, default: 0 },
  exercises: [
    {
      type: Schema.ObjectId,
      ref: "Exercise",
      required: true,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
