import React, { Component } from "react";
import { Link } from "react-router-dom";
import Save from "../Save";
import "./savedWorkouts.css";

class SavedWorkouts extends Component {
  render() {
    return (
      <div className="workouts-saved-container">
        <h1 className="title saved-title">Saved Workouts</h1>
        <div className="saved-container">
          {this.props.saved.map((save, idx) => {
            return <Save key={idx} details={save} likesCount={save.likes} />;
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
export default SavedWorkouts;
