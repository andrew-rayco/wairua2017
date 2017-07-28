import React, { Component } from 'react';
import Header from './Header'
import Feature from './Feature';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Feature />
        <Form />
      </div>
    );
  }
}

export default App;
