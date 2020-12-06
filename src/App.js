import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Shop from "./Components/Pages/Shop/Shop";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Home from "./Components/Pages/Home/Home";
import Project from "./Components/Pages/Project/Project";
import Illustrations from "./Components/Pages/Portfolio/Illustrations/Illustrations";
import Layout from "./Components/Pages/Portfolio/Layout/Layout";
import Branding from "./Components/Pages/Portfolio/Branding/Branding";

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={Contacts} />
              <Route path="/project" component={Project} />
              <Route path="/illustrations" component={Illustrations} />
              <Route path="/layout" component={Layout} />
              <Route path="/branding" component={Branding} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
