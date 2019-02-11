import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Books from './containers/Books';
import Authors from './containers/Authors';
import TodoList from './containers/TodoList';

const Page404 = ({ location }) => (
  <div>
    <h1>Error 404</h1>
    <h3>Location <code>{location.pathname}</code> not found</h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Books} />
              <Route path="/books" component={Books} />
              <Route path="/authors" component={Authors} />
              <Route path="/todo-list" component={TodoList} />
              <Route component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;