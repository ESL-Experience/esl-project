import React, { Component } from "react";
import Button from "../components/Button/Button";

class Activity extends Component {
    // state = {
    //     sample:[],
    //     firstName: "",
    //     lastName: ""
    // };

    componentDidMount

  render() {
    return ( 
      <div className="container-fluid">
​
        <div className="row intro">
          <div className="col-12 text-center">
            <p>Present tense study</p>
          </div>
        </div>
​
        <div className="row subtitle">
          <div className="col-12 text-center">
            <p>Drag the words to the correct blank. There are two extra answers.</p>
          </div>
        </div>
​
        <div>
          <div className="col-12 text-center">
            <p>Question 1/10</p>
          </div>
        </div>
​
        <div>
          <div className="col-12 text-center">
            <p>It hot today because I am wearing a coat.</p>
          </div>
        </div>
​
        <div>
          <div className="col-12 text-center">
                <ul>
                    <li>isn't</li> <li>aren't</li> <li>is</li> <li>are</li>
                </ul>
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
export default Activity;