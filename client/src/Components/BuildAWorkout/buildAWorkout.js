import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./buildAWorkout.css";

class BuildAWorkout extends Component {
  state = {
    workoutName: "",
    exerciseName: "",
    sets: 0,
    reps: 0,
    notes: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.post("/workouts", {});
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="build">
        <h1 className="title build-title">Build a Workout</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h4
              className="navbar navbar-light bg-light text-left "
              type="buttons btn btn-link"
            >
              <button>Save Workout</button>
            </h4>

            <div className="row">
              <div className="col-sm shadow-textarea">
                <input
                  name="workoutName"
                  value={this.state.workoutName}
                  className="form-control text-center"
                  type="text"
                  placeholder="Workout Name"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="col-sm shadow-textarea">
                <input
                  onChange={this.handleInputChange}
                  name="exerciseName"
                  value={this.state.exerciseName}
                  className="form-control text-center"
                  type="text"
                  placeholder="Exercise"
                />
              </div>

              <div className="col-sm shadow-textarea">
                <input
                  onChange={this.handleInputChange}
                  name="sets"
                  value={this.state.sets}
                  className="form-control text-center"
                  type="text"
                  placeholder="Sets"
                />
              </div>
              <div className="col-sm shadow-textarea">
                <input
                  onChange={this.handleInputChange}
                  name="reps"
                  value={this.state.reps}
                  className="form-control text-center"
                  type="text"
                  placeholder="Reps"
                />
              </div>
            </div>
            <div class="form-group shadow-textarea">
              <label for="exampleFormControlTextarea6" />
              <textarea
                onChange={this.handleInputChange}
                name="notes"
                value={this.state.notes}
                class="form-control z-depth-1"
                id="exampleFormControlTextarea6"
                rows="3"
                placeholder="Write notes here..."
              />
            </div>
          </form>
        </div>

        <div className="homebutt-container">
          <Link className="homebutt" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}
export default BuildAWorkout;
