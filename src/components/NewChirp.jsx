import React from "react";
// import ChirpForm from './ChirpForm'

class NewChirp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentChirp: "",
      chirps: []
    };
  }

  handleClick(event) {
    const currentChirp = this.state.todo;
    this.setState({ chirps: currentChirp.push(this.state.chirps) });
    event.preventDefault();
  }

  handleChange(event) {
    console.log(this.state.value);
    this.setState();
  }

  render() {
    return (
      <div className="col justify-content-lg-center border bg-white">
        <div className="form-group text-left">
          <h6 className="mt-3">
            <label>Create a Chirp:</label>
          </h6>
          <form onChange={this.handleChange}>
            <input
              className="w-100"
              value={this.state.value}
              onChange={this.handleClick}
              placeholder="What's happening?"
            />
            <div>
              <input
                className="btn btn-primary w-100 mt-1"
                type="submit"
                value="Post"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewChirp;
