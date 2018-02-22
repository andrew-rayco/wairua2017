import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Workshops from './Workshops'
import PrivateClasses from './PrivateClasses'
import Form from './Form'
import About from './About'
import Footer from './Footer'
import TeenCampSept from './TeenCampSept'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Route path="/" component={Header} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/workshops" exact={true} component={Workshops} />
          <Route path="/workshops/private-classes" exact={true} component={PrivateClasses} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
          <Route path="/teen-camp-sept" component={TeenCampSept} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
