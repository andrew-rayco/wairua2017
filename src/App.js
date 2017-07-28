import React, { Component } from 'react';
import './App.css';
import Feature from './Feature';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wairua Retreats</h1>
        <p>Holy shiz</p>
        <Feature />
        <Form />
      </div>
    );
  }
}

export default App;
