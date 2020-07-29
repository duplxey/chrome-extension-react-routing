import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./pages/users";
import About from "./pages/about";
import Home from "./pages/home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Navigation />
            </div>
            <div className="col-9">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
          </div>
      </Router>
    </div>
  );
}

export default App;
