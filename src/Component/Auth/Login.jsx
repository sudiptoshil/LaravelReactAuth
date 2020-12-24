import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
              <br></br><br></br>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                 
                ></input>
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Submit
              </button>
              <Link type="Button" className="btn btn-danger btn-block" to="/forgot">
                Forgot Password?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
