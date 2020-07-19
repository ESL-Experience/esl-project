import React, { Component } from "react";
// import Button from "../components/Button/Button";
import { quiz } from "../activity-data/intPres";
import Quiz from "react-quiz-component";
import { setCurrentUser } from "../actions/auth-actions";
import { connect } from "react-redux";
import "../components/Quiz/quiz.css"
// import "../components/Button/button.css"

class generateQuiz extends Component {
  render() {
    return (
      <div>
        <Quiz quiz={quiz} shuffle={true} continueTillCorrect={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setCurrentUser })(generateQuiz);
