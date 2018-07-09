import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import WorkoutsLibrary from "./Components/WorkoutsLibrary";
import SavedWorkouts from "./Components/SavedWorkouts";
import BuildAWorkout from "./Components/BuildAWorkout";
import LibraryCard from "./Components/LibraryCard";
import SavedCard from "./Components/SavedCard";
import axios from "axios";

class App extends Component {
  state = {
    workoutsLibrary: [],
    savedWorkouts: [],
  };

  componentDidMount() {
    // When we load go get our stuff from API
    axios.get("/workouts").then(apiResults => {
      const workoutsLibraryFromAPI = apiResults.data;

      const savedWorkoutsFromAPI = [
        {
          name: "Leg Blast",
          likes: 150,
        },
        {
          name: "Back and Bi's",
          likes: 201,
        },
        {
          name: "Glutes n Hammies",
          likes: 53,
        },
        {
          name: "Chest and Tri's",
          likes: 78,
        },
        {
          name: "Leg Blast",
          likes: 150,
        },
        {
          name: "Back and Bi's",
          likes: 201,
        },
        {
          name: "Glutes n Hammies",
          likes: 53,
        },
        {
          name: "Chest and Tri's",
          likes: 78,
        },
        {
          name: "Leg Blast",
          likes: 150,
        },
        {
          name: "Back and Bi's",
          likes: 201,
        },
        {
          name: "Glutes n Hammies",
          likes: 53,
        },
        {
          name: "Chest and Tri's",
          likes: 78,
        },
        {
          name: "Leg Blast",
          likes: 150,
        },
        {
          name: "Back and Bi's",
          likes: 201,
        },
        {
          name: "Glutes n Hammies",
          likes: 53,
        },
        {
          name: "Chest and Tri's",
          likes: 78,
        },
      ];
      // After we get out stuff from API,
      // We are going to set our state so that we can re-render our components
      this.setState({
        workoutsLibrary: workoutsLibraryFromAPI,
        savedWorkouts: savedWorkoutsFromAPI,
      });
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/library"
            render={props => (
              <WorkoutsLibrary
                {...props}
                workouts={this.state.workoutsLibrary}
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={props => (
              <SavedWorkouts {...props} saved={this.state.savedWorkouts} />
            )}
          />
          <Route exact path="/build" component={BuildAWorkout} />
          <Route exact path="/librarycard" component={LibraryCard} />
          <Route exact path="/savedcard" component={SavedCard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
