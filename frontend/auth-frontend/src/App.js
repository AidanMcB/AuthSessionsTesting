import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// ROUTES
import Index from './components/Index.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Default from './components/Default.jsx';
import Dashboard from "./components/Dashboard";

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  // Checks if a user is already logged in
  componentDidMount(){
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true })
    .then(resp => {
      console.log("CHECK LOGIN STATUS", resp.data);

      if(resp.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: resp.data.user
        })
      } else if(!resp.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }

    })
    .catch(err => { console.log(err) })
  }

  // LOGIN
  handleLogin = (data) => {
    console.log("LOGIN CATCH", data);
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  // LOGOUT
  handleLogout = () => {

    fetch("http://localhost:3000/logout", {
      method: 'POST',
      credentials: 'include'
    })
    .then(resp => {
      console.log(resp);
    })
    .then(resp => {
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      })
    })

  }

  render() {
    return (
      <>
        <Router>
          <Switch>

            <Route exact path="/" component={Index} />
            <Route exact path="/dashboard" render={props => (
              <Dashboard
                {...props}
                state={this.state}
              />
            )} />

            <Route exact path="/signup" render={props => (
              <SignUp
                {...props} 
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )} />

            <Route exact path="/login" render={props => (
              <LogIn
                {...props} 
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}
              />
            )} />

            <Route exact pat="/dashboard" render={props => (
              <Dashboard
                {...props}
                state={this.state}
              />
            )} />

            <Route component={Default} />

          </Switch>
        </Router>
      </>
    )
  }
}
