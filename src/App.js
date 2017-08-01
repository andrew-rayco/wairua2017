import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Feature from './Feature';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Route path="/" component={Header} />
          <Route path="/form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
