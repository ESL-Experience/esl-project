import React, { Component } from "react";
import Button from "../components/Button/Button";
import { quiz } from "../activity-data/intPrepPlc";
import Quiz from "react-quiz-component";
import { setCurrentUser } from "../actions/auth-actions";
import { connect } from "react-redux";
import "../components/Quiz/quiz.css";
import axios from "axios";

class generateQuiz extends Component {
  state = {
    user: {},
  };

  handleQuizSave = (data) => {
    axios.put(`/profile/api/${this.props.auth.user._id}/save-quiz`, data).then(res => {
      this.props.history.push("/IntLanding")
    })
  }

  async componentDidMount() {
    await this.props.setCurrentUser();
  }

  constructor(props) {
    super(props);
    this.state = { isComplete: false };
  }

  render() {
    const onCompleteAction = (obj) => {
      const title = quiz.quizTitle;
      const date = Date.now();
      const quizData = { title: title, dateTaken: date, actRes: obj };
      const { user } = this.props.auth;
      console.log(quizData);
      console.log(user);


      return (
<div className="row">
          <div className="col-6 text-center mr-auto">
            <Button
              onClick={() => this.handleQuizSave(quizData)}
              type="button"
              buttonStyle="btn--yellow--outline"
              buttonSize="btn--medium"
            >
              Home
            </Button>
          </div>
          <div className="col-6 text-center mr-auto">
            <Button
              onClick={() => this.props.history.push("/IntPlaceQuiz")}
              type="button"
              buttonStyle="btn--yellow--outline"
              buttonSize="btn--medium"
            >
              Retake
            </Button>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Quiz
          quiz={quiz}
          onComplete={onCompleteAction}
          shuffle={true}
          continueTillCorrect={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setCurrentUser })(generateQuiz);
