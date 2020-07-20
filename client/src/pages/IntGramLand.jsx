import React, { Component } from "react";
import Button from "../components/Button/Button";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/auth-actions";
import "../components/IntGramLand/intgramlanding.css";

class IntGramLand extends Component {
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
              <p>{user.givenName}, choose your topic today.</p>
            </div>
          </div>
          <div className="row subtitle">
            <div className="col-12 text-center">
              <p>Intermediate Grammar</p>
            </div>
          </div>
          <div className="row grammar">
            <div className="col-6 text-center">
              <div id="tenseContain">Tenses</div>
            </div>
            <div className="col-6 text-center">
              <div id="prepContain">Prepositions</div>
            </div>
          </div>
          <div className="row two">
            <div className="col-6 text-center">
              <a href={"/intPresQuiz"}>
                {" "}
                <Button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  type="button"
                  buttonStyle="btn--yellow--outline"
                  buttonSize="btn--medium"
                >
                  Present
                </Button>
              </a>
            </div>
            <div className="col-6 text-center">
              <a href={"/IntTimeQuiz"}>
                {" "}
                <Button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  type="button"
                  buttonStyle="btn--yellow--outline"
                  buttonSize="btn--medium"
                >
                  Preps of Time
                </Button>
              </a>
            </div>
          </div>
          <div className="row two">
            <div className="col-6 text-center">
              <a href={"/IntPastQuiz"}>
                {" "}
                <Button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  type="button"
                  buttonStyle="btn--yellow--outline"
                  buttonSize="btn--medium"
                >
                  Past
                </Button>
              </a>
            </div>
            <div className="col-6 text-center">
              <a href={"/IntPlaceQuiz"}>
                <Button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  type="button"
                  buttonStyle="btn--yellow--outline"
                  buttonSize="btn--medium"
                >
                  Preps of Place
                </Button>
              </a>
            </div>
          </div>
          <div className="row two">
            <div className="col-6 text-center">
              <a href={"/IntFutrQuiz"}>
                {" "}
                <Button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  type="button"
                  buttonStyle="btn--yellow--outline"
                  buttonSize="btn--medium"
                >
                  Future
                </Button>
              </a>
            </div>
            <div className="col-6 text-center">
              <a href={"/IntMvmtQuiz"}>
                <Button
                  onClick={() => {
                    console.log("clicked");
                  }}
                  type="button"
                  buttonStyle="btn--yellow--outline"
                  buttonSize="btn--medium"
                >
                  Preps of Movement
                </Button>
              </a>
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
export default connect(mapStateToProps, { setCurrentUser })(IntGramLand);
