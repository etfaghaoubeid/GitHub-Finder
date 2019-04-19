import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Main from './components/layouts/Main';
import User from './components/users/User';
import Home from './components/mostPopularRepo/Home';
import UserRepos from './components/users/UserRepos';
import About from './components/about/About';
import Repositories from './components/companies/Repositories';

class App extends Component {
  render() {
    return (
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/find-user" component={User} />
        <Route path="/user-repos" component={UserRepos} />
        <Route path="/company-repos" component={Repositories} />
        <Route path="/about" component={About} />
      </Main>
    );
  }
}

export default App;
