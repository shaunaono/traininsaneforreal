import React, { Component } from "react";
import "./save.css";
import { Link } from "react-router-dom";

class Save extends Component {
  render() {
    return (
      <div className="save-container">
        <Link
          to={{
            pathname: "/savedcard",
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
export default Save;
