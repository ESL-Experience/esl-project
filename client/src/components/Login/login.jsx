import React from 'react';


 let googlePath = (process.env.NODE_ENV === "production") ? "https://esl-final-project.herokuapp.com/auth/google" : "http://localhost:3001/auth/google"
 let facebookPath = (process.env.NODE_ENV === "production") ? "https://esl-final-project.herokuapp.com/auth/facebook" : "http://localhost:3001/auth/facebook"



const Jumbotron = () => {
  return (
    <div
      className="jumbotron text-center">
      <a  
        className="nav-link"
      as='a' href="/auth/google">
        <button type="button" className="btn btn-gplus btn-danger"><i className="fab fa-google-plus-g pr-1">Google</i></button>
      </a>
      <a  
        className="nav-link"
      as='a' href="/auth/facebook">
        <button type="button" className="btn btn-facebook btn-danger"><i className="fab fa-facebook pr-1">Facebook</i></button>
      </a>
    </div>

  );
};

export default Jumbotron;