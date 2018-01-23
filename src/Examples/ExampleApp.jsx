import React, { Component } from 'react';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
    this.items = [
      {
        value: "Hello World",
        id: 0
      },
      {
        value: "Hello back, World",
        id: 1
      }
    ];
  }
  updateMessage = (value) => {
    this.setState({ message: value })
  }
  render() {
    return (
      <div>
        <input
          placeholder="New Message"
          value={this.state.message}
          onChange={(event) => { this.updateMessage(event.target.value) }} />
        <h1>{this.state.message}</h1>
        <List items={this.items} />
      </div>
    )
  }
}

export default App;