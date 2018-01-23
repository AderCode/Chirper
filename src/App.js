import React, { Component } from "react";
import "./App.css";
import NewChirp from "./components/NewChirp";
// import Welcome from "./components/Welcome";
import ChirpForm from "./components/ChirpForm";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBarLeft from "./components/SideBarLeft"
import SideBarRight from "./components/SideBarRight"

class App extends Component {
  constructor(props) {
    super(props)

    this.chirps = [
      {
        name: "Aderhold",
        text: "I'm not sure how to React...",
        timestamp: "Jan 22",
        id: 0
      },
      {
        name: "Aderhold",
        text: "They see me chirpin', they hatin'!",
        timestamp: "Jan 22",
        id: 1
      },
      {
        name: "Aderhold",
        text: "OMG, Becky! He's such a chirp. #LevelUp",
        timestamp: "Jan 22",
        id: 2
      }
    ]
  }
  render() {
    return (
      <div className="text-center bg-secondary">
        <NavBar />
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3">
              <SideBarLeft />
            </div>
            <div className="col-lg-6">
              <NewChirp />
              <ChirpForm chirps={this.chirps} />
            </div>
            <div className="col-lg-3">
            <SideBarRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
