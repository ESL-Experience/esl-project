import React, { Component } from "react";
import Button from "../components/Button/Button";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/auth-actions";

class Levels extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    await this.props.setCurrentUser();
  }
  render() {
    if (this.props.auth.isAuthenticated) {
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
    } else {
      return <h1>...loading</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setCurrentUser })(Levels);
