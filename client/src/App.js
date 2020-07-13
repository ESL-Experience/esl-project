import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import levels from "./components/Levels/levels";
import Nav from "./components/Nav/nav";
import "./App.css"
import home from "./components/Home/home";
import login from "./components/Login/login";
import NoMatch from "../src/pages/NoMatch"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/home/:id" component={home} />
          <Route exact path="/levels" component={levels} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
