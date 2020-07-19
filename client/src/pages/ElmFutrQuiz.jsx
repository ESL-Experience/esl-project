import React, { Component } from "react";
import Button from "../components/Button/Button";
import { quiz } from "../activity-data/elemFutr";
import Quiz from "react-quiz-component";
import { setCurrentUser } from "../actions/auth-actions";
import { connect } from "react-redux";
import "../components/Quiz/quiz.css";

class generateQuiz extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    await this.props.setCurrentUser();
  }

  constructor(props) {
    super(props);
    this.state = { isComplete: false };
  }

  render() {
    const onCompleteAction = (obj) => {
      const title = quiz.quizTitle
      const date = Date.now()
      let quizData = {[title]: 
        {dateTaken: date, actRes: obj}}
      const { user } = this.props.auth;
      console.log(quizData);
      console.log(user);
      return (
        <div>
          <div className="col-12 text-center">
              <Button
                onClick={() => this.props.history.push('/IntLanding')}
                type="button"
                buttonStyle="btn--yellow--outline"
                buttonSize="btn--medium"
              >
                Home
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
