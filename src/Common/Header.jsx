import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "../Component/Home";
import Login from "../Component/Auth/Login";
import Register from "../Component/Auth/Register";
import Profile from "../Component/Auth/Profile";
import Forgot from "../Component/Auth/Forgot";
import Reset from "../Component/Auth/Reset";

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/reset" component={Reset}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
