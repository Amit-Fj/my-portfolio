import React, { Component } from "react";
import "./App.css";
import Introduction from "./components/Introduction";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Introduction></Introduction>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
