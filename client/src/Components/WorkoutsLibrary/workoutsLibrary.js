import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./workoutsLibrary.css";
import Workout from "../Workout";

class WorkoutsLibrary extends Component {
  render() {
    return (
      <div className="workouts-library-container">
        <p className="title library-title h4">Workouts Library</p>
        <div className="workouts-container">
          {this.props.workouts.map((workout, idx) => {
            return <Workout key={idx} details={workout} />;
          })}
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
export default WorkoutsLibrary;
