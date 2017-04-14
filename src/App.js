import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import One from "./sections/One.js";
import Two from "./sections/Two.js"
import Three from "./sections/Three.js";
import Four from "./sections/Four.js";
import Five from "./sections/Five.js"

class App extends Component {
  constructor(){
    super();
    this.state = {
      scrolled: false
    }
  }
  render() {
    return (
      <div className="App">
          <div className="hamburger">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <One className="one section"/>
          <Two className="two section" />
          <Three className="three section" />
          <Four className="four section" />
          <Five className="five section" />
      </div>
    );
  }
}

export default App;
