import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./buildAWorkout.css";

class BuildAWorkout extends Component {
  render() {
    return (
      <div className="build">
        <h1 className="title build-title">Build a Workout</h1>
        <div className="container">
          <h4
            className="navbar navbar-light bg-light text-left "
            type="buttons btn btn-link"
          >
            {" "}
            save
          </h4>

          <div className="row">
            <div className="col-sm shadow-textarea">
              <input
                className="form-control text-center"
                type="text"
                placeholder="Workout Name"
              />
            </div>

            <div className="col-sm shadow-textarea">
              <input
                className="form-control text-center"
                type="text"
                placeholder="Exercise"
              />
            </div>

            <div className="col-sm shadow-textarea">
              <input
                className="form-control text-center"
                type="text"
                placeholder="Sets"
              />
            </div>
            <div className="col-sm shadow-textarea">
              <input
                className="form-control text-center"
                type="text"
                placeholder="Reps"
              />
            </div>
          </div>
          <div class="form-group shadow-textarea">
            <label for="exampleFormControlTextarea6" />
            <textarea
              class="form-control z-depth-1"
              id="exampleFormControlTextarea6"
              rows="3"
              placeholder="Write notes here..."
            />
          </div>
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
