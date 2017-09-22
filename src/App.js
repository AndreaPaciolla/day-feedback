import React, { Component } from 'react';
import './App.css';
import HumorButton from './components/HumorButton.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HumorButton humor="bad" />
        <HumorButton humor="fine" />
        <HumorButton humor="super" />
      </div>
    );
  }
}

export default App;
