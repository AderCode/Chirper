import React from "react";
import ChirpForm from './ChirpForm'

class NewChirp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    // this.refs.form.reset();
    event.preventDefault();
    new ChirpForm(this.state.value);
  }

  render() {
    return (
      <div className="col justify-content-lg-center w-75 border mx-auto">
          <div className="form-group text-left">
            <h6 className="mt-3">
              <label>Create a Chirp:</label>
            </h6>
            <form onSubmit={this.handleSubmit}>
                <input
                className="w-100"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="What's happening?"
                />
              <div>
              <input className="btn btn-primary w-100 mt-1" type="submit" value="Post" />
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default NewChirp;
