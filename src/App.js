import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Alfonso"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Bottone" })}>
            Change Title
          </button>
        </header>
      </div>
    );
  }
}

export default App;
