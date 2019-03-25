import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          destination="Lyon"
          country="France"
          photo="https://static.vueling.com/cms/media/1216826/lyon.jpg"
          distance="20 km"
        />
        <Travel
          destination="Chatillon sur Chalaronne"
          country="France"
          photo="https://media-cdn.tripadvisor.com/media/photo-s/0f/51/7f/8f/le-grenier-a-sel.jpg"
          distance="50 km"
        />
      </div>
    );
  }
}

export default App;