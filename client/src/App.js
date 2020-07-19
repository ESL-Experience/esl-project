import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, BrowserRouter, useHistory } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Nav from "./components/Nav/nav";
import "./App.css";
import home from "./components/Home/home";
import login from "./components/Login/login";
import NoMatch from "../src/pages/NoMatch";
import Levels from "../src/pages/Levels";
import store from "./store";
import { Provider } from "react-redux";
import Activity from "../src/pages/Activity";
import ElmLanding from "../src/pages/ElmLanding";
import IntLanding from "../src/pages/IntLanding"
import intPres from "../src/pages/intPresQuiz"

const Main = withRouter(({ location }) => {
  return (
    // <Router>
      <div>
        {
          location.pathname != '/login' && <Nav />
        }
        <Switch>
          <Route exact path="/home" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/dashboard" component={Levels} />
          <Route exact path="/ElmLanding" component={ElmLanding} />
          <Route exact path="/IntLanding" component={IntLanding} />
          <Route exact path="/Activity" component={Activity} />
          <Route exact path="/intPresQuiz" component={intPres} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    // </Router>
  );
})

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
  </Provider>
)

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div>
//           <Nav />
//           <Switch>
//             <Route exact path="/login" component={login} />
//             <Route exact path="/home" component={home} />
//             <Route exact path="/dashboard" component={Levels} />
//             {/* <Route exact path="/books" component={Books} /> */}
//             {/* <Route exact path="/books/:id" component={Detail} /> */}
//             <Route component={NoMatch} />
//           </Switch>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

export default App;
