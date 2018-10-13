import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Curriculums from './components/curriculums';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/curriculum" exact component={Curriculums} />
          <Route path="/curriculum/:id" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
