import React, { Component } from 'react';
import '../css/app.css';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
