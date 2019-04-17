import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'

import Main from './components/layouts/Main';
import User from './components/users/User';
import Home from './components/mostPopularRepo/Home';

class App extends Component {
  render() {
    return (
      
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path ="/find-user" component={User}/> 
      </Main>
      
    );
  }
}

export default App;
