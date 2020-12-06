import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Shop from "./Components/Pages/Shop/Shop";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Home from "./Components/Pages/Home/Home";
import Project from "./Components/Pages/Project/Project.js";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={Contacts} />
              <Route path="/project" component={Project} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
