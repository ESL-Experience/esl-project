import React, { Component } from "react";
import Button from "../components/Button/Button";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/auth-actions";
import "../components/IntLanding/intlanding.css"

class IntLanding extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    await this.props.setCurrentUser();
  }
  render() {
    console.log(this.props);
    const { user } = this.props.auth;
    if (this.props.auth.isAuthenticated) {
      return (
        <div className="container-fluid">
          <div className="row intro">
            <div className="landing col-12 text-center">
              <p>{user.displayName}, how will you study today?</p>
            </div>
          </div>
          <div className="row subtitle">
            <div className="subtitle col-12 text-center">
              <p>Intermediate Level</p>
            </div>
          </div>
          <div>
            <div className="col-12 text-center">
              <div id="pracContain">
                Practice
              </div>
            </div>
          </div>
          <div>
            <div className="col-12 text-center">
              <a href={"/IntGramLand"}>
              <Button
                onClick={() => {
                  console.log("I was clicked");
                }}
                type="button"
                buttonStyle="btn--yellow--outline"
                buttonSize="btn--medium">
                Grammar
              </Button>
              </a>
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
                buttonSize="btn--medium">
                Vocabulary
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
export default connect(mapStateToProps, { setCurrentUser })(IntLanding);