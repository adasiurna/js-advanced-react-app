import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Books from './containers/Books';
import Authors from './containers/Authors';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Route exact path="/" component={Books} />
          <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
        </div>
      </Router>
    );
  }
}

export default App;