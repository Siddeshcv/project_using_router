import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./Pages/Home";
// import FeedBack from "./Pages/FeedBack";
// import About from "./Pages/About";
// import MainPage from "./Pages/MainPage";
import Nav from "./Pages/Nav";
const App = () => {
  return (
    <div>
      <Nav />
      {/* <Router>
        <Switch>
          <navbar>
            <MainPage />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/feedback">
              <FeedBack />
            </Route>
          </navbar>
        </Switch>
      </Router> */}
    </div>
  );
};

export default App;
