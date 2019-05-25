import React, { Component } from "react";
import "./App.css";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Login from "./Login";
import Secret from "./Secret";
import authService from './auth/AuthService';

import { Switch, Route } from "react-router-dom";
import AuthService from "./auth/AuthService";

class App extends Component {
  state = {
    user: null
  };

  service = new AuthService();

  setUser = user => {
    this.setState({ user: user });
  };

  fetchUser = () => {
    if(this.state.user === null) {
      this.service.currentUser()
        .then(response => {
          this.setState({user: response})
        })
        .catch(err => {
          this.setState({user: null})
        })
    }
  }

  componentDidMount () {
    this.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.user}/>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route
            exact
            path="/login"
            render={() => <Login setUser={this.setUser} />}
          />
          <Route
            exact
            path="/secret"
            render={() => <Secret currentUser={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
