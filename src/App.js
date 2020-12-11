import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar2 from "./Components/Navbar2/Navbar2";

import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Banner from "./Components/Banner";
import Shop from "./Components/Pages/Shop/Shop";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Home from "./Components/Pages/Home/Home";
import Project from "./Components/Pages/Project/Project";
import Illustrations from "./Components/Pages/Portfolio/Illustrations/Illustrations";
import Layout from "./Components/Pages/Portfolio/Layout/Layout";
import Branding from "./Components/Pages/Portfolio/Branding/Branding";
import Header from "./Components/Header";
// import Navbar from "./Components/Navbar/Navbar";

const routes = [
  {
    key: 1,
    path: "/",
    component: Home,
  },
  {
    key: 2,
    path: "/portfolio",
    component: Portfolio,
  },
  {
    key: 3,
    path: "/shop",
    component: Shop,
  },
  {
    key: 4,
    path: "/contact",
    component: Contacts,
  },
  { key: 5, path: "/project", component: Project },
  { key: 6, path: "/illustration", component: Illustrations },
  { key: 7, path: "/layout-design", component: Layout },
  { key: 8, path: "/branding", component: Branding },
];

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Banner />
        <div className="app-container">
          {/* <Navbar /> */}
          <div className="headerNavReverse">
            <Navbar2 />
            <Header />
          </div>
          <div className="main-content">
            <Switch>
              {routes.map(({ key, path, component: C }) => (
                <Route
                  exact={path === "/" ? true : false}
                  key={key}
                  path={path}
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
