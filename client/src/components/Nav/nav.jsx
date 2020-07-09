import React, { Component } from "react";
import logo from "./eng-exp-logo-wht-bg-no-txt.png";
import "./nav.css";
import { Link } from "react-router-dom";

export default class nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
          <a className="navbar-brand text-white" href="#">
            <img src= { logo } height="200" width="200"/>
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
              <Link to="/" className="nav-item nav-link active text-white align-right">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link to="/levels"className="nav-item nav-link text-white" >
                Levels
              </Link>
              <a className="nav-item nav-link text-white" href="#">
                Pricing
              </a>
              <a
                className="nav-item nav-link text-white"
                href="#"
              >
                Disabled
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
