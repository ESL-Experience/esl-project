import React, { Component } from "react";
import Button from "../components/Button/Button";
import { intPres } from "../db/int-present";

class Exercises extends Component {
  state = {
    userAnswer: null,
    num: 0,
    currentQuestion: 0,
    options: [],
    answer: "",
  };

  loadExercise = () => {
    const { currentQuestion } = this.state;
    this.setState({
      num: intPres[currentQuestion].id,
      questions: intPres[currentQuestion].question,
      options: intPres[currentQuestion].options,
      answer: intPres[currentQuestion].answer,
    });
  };

  componentDidMount() {
    this.loadExercise();
  }

  render() {
    return (
      <div className="container-fluid">
        ​
        <div className="row intro">
          <div className="col-12 text-center">
            <h3>Activity</h3>
          </div>
        </div>
        ​
        <div className="row subtitle">
          <div className="col-12 text-center">
            <p>Complete the sentences with the best answer.</p>
          </div>
        </div>
        ​
        <div>
          <div className="col-12 text-center">
            <p>Question {this.state.num}</p>
          </div>
        </div>
        ​
        <div>
          <div className="col-12 text-center">
            <p>{this.state.questions}</p>
          </div>
        </div>
        ​
        <div>
          <div className="col-12 text-center">
            <ul>
              <li>{this.state.options[0]}</li>
              <li>{this.state.options[1]}</li>
              <li>{this.state.options[2]}</li>
              <li>{this.state.options[3]}</li>
            </ul>
          </div>
        </div>
        {/* <form>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-options"
                value="option1"
                className="option-check-input"
              />
              {this.state.option[0]}
            </label>
          </div>
        </form> */}
        ​
        <div>
          <div className="col-12 text-center">
            <Button
              onClick={() => {
                console.log("I was clicked");
              }}
              type="button"
              buttonStyle="btn--orange--outline"
              buttonSize="btn--medium"
            >
              Check Answers
            </Button>
          </div>
        </div>
        ​
        <div>
          <div className="col-12 text-center">
            <Button
              onClick={() => {
                console.log("I was clicked");
              }}
              type="button"
              buttonStyle="btn--orange--outline"
              buttonSize="btn--medium"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Exercises;
