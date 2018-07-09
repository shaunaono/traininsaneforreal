import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home">
          <h1 className="title">#TrainInsane</h1>
          <div className="navbutts">
            <Link className="btn librarybutt align-middle" to="/library">
              Workouts Library
            </Link>
            <Link className="btn buildbutt align-middle" to="/build">
              Build a Workout
            </Link>
            <Link className="btn savedbutt align-middle" to="/saved">
              Saved Workouts
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
