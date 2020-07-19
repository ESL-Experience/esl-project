import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/auth-actions";
import Button from "../components/Button/Button";

class ElmGramLand extends Component {
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
            <div className="col-12 text-center">
              <p>{user.displayname}, choose your topic today.</p>
            </div>
          </div>
          <div className="row subtitle">
            <div className="col-12 text-center">
              <p>Elementary Grammar</p>
            </div>
          </div>
          
          <div className="col-6 text-center">
              <div id="tenseContain">
                  Tenses
              </div>
              </div>
              <div className="col-6 text-center">
                  <div id="prepContain">
                      Prepositions
                  </div>
              </div>
          </div>
        
      );

    } else {
      return <h1>...loading</h1>
    }
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect (mapStateToProps, { setCurrentUser}) (ElmGramLand);