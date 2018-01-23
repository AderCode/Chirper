import React, { Component } from "react";
import "./App.css";
import NewChirp from "./components/NewChirp";
import Welcome from "./components/Welcome";
import ChirpForm from "./components/ChirpForm";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Header />
        <Welcome name="Aderhold" />
        <NewChirp />
        <ChirpForm
          name="Aderhold"
          text="I'm not sure how to React..."
          timestamp="Jan 22, 2018 3:56"
        />
        <ChirpForm
          name="Aderhold"
          text="They see me chirpin, they hatin'!"
          timestamp="Jan 22, 2018 2:36pm"
        />
        <ChirpForm
          name="Aderhold"
          text="OMG, Becky! He's such a chirp. #LevelUp"
          timestamp="Jan 22, 2018 2:18pm"
        />
      </div>
    );
  }
}

export default App;
