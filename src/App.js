import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Curriculums from './components/curriculums';
import Dashboard from './components/dashboard';
import Header from './components/header';
import { fetchUser } from './actions/user_actions';

class App extends Component {
  componentWillMount() {
    if (localStorage.authToken) {
      this.props.fetchUser(localStorage.authToken)
    }
  }
  render() {
    return (
        <BrowserRouter>
          <div style={{height: '100%'}}>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/curriculum" exact component={Curriculums} />
            <Route path="/curriculum/:id" exact component={Dashboard} />
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  fetchUser
}

export default connect(null, mapDispatchToProps)(App);
