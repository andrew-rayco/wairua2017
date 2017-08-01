import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Form from './Form'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Route path="/" component={Header} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
