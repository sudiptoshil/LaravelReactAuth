import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <br></br>
            <br></br>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                ></input>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                ></input>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                ></input>
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">Confim Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                ></input>
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Submit
              </button>
              <Link
                type="Button"
                className="btn btn-danger btn-block"
                to="/login"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
