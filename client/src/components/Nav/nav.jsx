import React, { Component } from "react";
import logo from "./eng-exp-logo-wht-bg-no-txt.png";
import "./nav.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class nav extends Component {
  render() {
    console.log(this.props.auth.user);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
          <a className="navbar-brand text-white" href="#">
            <img src= { logo } height="250" width="250"/>
          </a> <span className="title text-white">English Experience </span>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link to="/home" className="nav-item nav-link active text-white align-right">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link to="/dashboard/:id" className="nav-item nav-link text-white" >
                Levels
              </Link>
              <Link to="/Activity" className="nav-item nav-link text-white">
                Activities
              </Link>
              <Link to="/login"className="nav-item nav-link text-white" >
                Log Out
              </Link>
              {/* <a
                className="nav-item nav-link text-white"
                href="#"
              >
                Disabled
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(nav);