import React, { Component } from "react";
import "./workout.css";
import { Link } from "react-router-dom";

class Workout extends Component {
  render() {
    return (
      <div className="workout-container">
        <Link
          to={{
            pathname: "/librarycard",
            state: { details: this.props.details },
          }}
        >
          <h6>{this.props.details.name}</h6>
        </Link>
        <p className="likes">{`${this.props.details.likes} Likes`}</p>
      </div>
    );
  }
}
export default Workout;
