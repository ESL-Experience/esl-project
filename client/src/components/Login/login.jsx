import React from "react";
import "./login.css";
import logo from "../../images/logo.png";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

let googlePath =
  process.env.NODE_ENV === "production"
    ? "https://esl-final-project.herokuapp.com/auth/google"
    : "http://localhost:3001/auth/google";
let facebookPath =
  process.env.NODE_ENV === "production"
    ? "https://esl-final-project.herokuapp.com/auth/facebook"
    : "http://localhost:3001/auth/facebook";

const container = () => {
  return (
    <div>
      <img className="logo" src={logo} />
      <h1>Login</h1>
      <div id="container" className="col-12 text-center">
        <a className="nav-link" as="a" href={googlePath}>
          <GoogleLoginButton></GoogleLoginButton>
        </a>
        <a className="nav-link" as="a" href={facebookPath}>
          <FacebookLoginButton></FacebookLoginButton>
        </a>
      </div>
    </div>
  );
};

export default container;
