import React, { Component } from "react";
import Button from "../components/Button/Button";

class Dash extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row intro">
          <div className="col-12 text-center">
            <p>Hello John!</p>
          </div>
        </div>
        <div className="row subtitle">
          <div className="col-12 text-center">
            <p>Choose your level of study.</p>
          </div>
        </div>
        <div>
          <div className="col-12 text-center">
            <Button
              onClick={() => {
                console.log("I was clicked");
              }}
              type="button"
              buttonStyle="btn--yellow--outline"
              buttonSize="btn--medium"
            >
              Elementary
            </Button>
          </div>
        </div>
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
              Intermediate
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Dash;
