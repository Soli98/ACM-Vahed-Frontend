import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          {/* <Route path="/signup" exact component={Signup} /> */}
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
