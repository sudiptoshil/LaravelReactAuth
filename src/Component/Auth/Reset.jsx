import React, { Component } from "react";

class Reset extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <br></br>
            <br></br>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Pin Code "
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
