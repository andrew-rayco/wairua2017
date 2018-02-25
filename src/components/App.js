import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

import Header from './Header'
import Home from './Home'
import Gallery from './Gallery'
import Workshops from './Workshops'
import PrivateClasses from './PrivateClasses'
import Create from './Create'
import Form from './Form'
import About from './About'
import Footer from './Footer'
import TeenCampSept from './TeenCampSept'


class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App container">
            <Route path="/" component={Header} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/gallery" exact={true} component={Gallery} />
            <Route path="/adventures" exact={true} component={Workshops} />
            <Route path="/adventures/private-classes" exact={true} component={PrivateClasses} />
            <Route path="/adventures/create-your-own" exact={true} component={Create} />
            <Route path="/form" component={Form} />
            <Route path="/about" component={About} />
            <Route path="/teen-camp-sept" component={TeenCampSept} />
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
