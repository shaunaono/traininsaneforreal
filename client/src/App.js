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
          _id: "5b3911d28ad80478acff46bc",
          name: "Back and Bi's",
          likes: 201,
          exercises: [
            {
              _id: "5b3911d18ad80478acff46b5",
              name: "Back Extension",
              sets: 4,
              reps: 15,
              notes: "With a barbell",
            },
          ],
        },
        {
          name: "Glutes n Hammies",
          likes: 53,
          exercises: [
            {
              _id: "5b3911d18ad80478acff46b6",
              name: "Adductors",
              sets: 3,
              reps: 30,
              notes: "0",
            },
            {
              _id: "5b3911d18ad80478acff46b7",
              name: "Leg Curls",
              sets: 3,
              reps: 20,
              notes: "0",
            },
          ],
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
