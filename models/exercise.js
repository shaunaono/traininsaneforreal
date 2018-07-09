const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  notes: { type: String },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
