import React, { Component } from "react";
import "./App.css";
import Introduction from "./components/introduction";
import About from "./components/about";
// import Timeline from "./components/timeline";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Introduction></Introduction>
            <About></About>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
