import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar2 from "./Components/Navbar2/Navbar2";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import { routes } from "./Components/Pages/Project/Data";

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        {/* <Banner /> */}
        <div className="app-container">
          <div className="headerNavReverse">
            <Navbar2 />
            <Header />
          </div>
          <div className="main-content">
            <Switch>
              {routes.map(({ key, path, component: C }) => (
                <Route
                  // exact={path === "/" ? true : false}
                  exact
                  key={key}
                  path={`${path}`}
                  render={(props) => <C {...props} />}
                />
              ))}
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
