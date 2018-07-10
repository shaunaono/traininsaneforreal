import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./savedCard.css";

export default class SavedCard extends Component {
  render() {
    const workoutDetails = this.props.location.state.details;

    return (
      <div className="card-container">
        <div className="savedCard text-center h2">Saved Card</div>
        <h6 className="workout-name text-center h3">Workout Name</h6>
        <h4 className="text-center h4">{workoutDetails.name}</h4>
        <div className="workout-details">
          {workoutDetails.exercises.map(exercise => (
            <Exercise details={{ ...exercise }} />
          ))}
        </div>
      </div>
    );
  }
}

const Exercise = props => {
  return (
    <div className="card-container">
      <form>
        <label className="details h5 text-center">
          EXERCISE NAME
          <input type="text" name="name" value={props.details.name} />
        </label>
        <div className="exerise-details text-center">
          <label className="text-center h5">SETS </label>
          <input
            className="text-center"
            type="text"
            name="sets"
            value={props.details.sets}
          />
          <label className="text-center h5">REPS </label>
          <input
            className="text-center"
            type="text"
            name="notes"
            value={props.details.notes}
          />
        </div>
      </form>
      <div className="homebutt-container">
        <Link className="homebutt" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};
