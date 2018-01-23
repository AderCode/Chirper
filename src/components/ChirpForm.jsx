import React from "react";
import Avatar from "./Avatar";

class ChirpForm extends React.Component {
    render() {
    return (
      <div className="card w-75 mx-auto mt-1">
        <div className="card-header text-left">
          <Avatar />
          <div className="d-inline align-bottom ml-2">{this.props.name} chirped:</div>
        </div>
        <div className="card-body text-left">
          <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
              <cite title="Source Title">{this.props.timestamp}</cite>
            </footer>
            {this.props.text}
          </blockquote>
        </div>
      </div>
    );
  }
}

export default ChirpForm;
