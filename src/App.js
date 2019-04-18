import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Main from './components/layouts/Main';
import User from './components/users/User';
import Home from './components/mostPopularRepo/Home';
import UserRepos from './components/users/UserRepos';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/find-user" component={User} />
        <Route path="/user-repos" component={UserRepos} />
        <Route path="/about" component={About} />
      </Main>
    );
  }
}

export default App;
