import React, { Component } from "react";
import "./App.css";
import NewChirp from "./components/NewChirp";
// import Welcome from "./components/Welcome";
// import ChirpForm from "./components/ChirpForm";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBarLeft from "./components/SideBarLeft"
import SideBarRight from "./components/SideBarRight"

class App extends Component {
  render() {
    return (
      <div className="text-center bg-light">
        <NavBar />
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3">
              <SideBarLeft />
            </div>
            <div className="col-lg-6">
              <NewChirp />
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
