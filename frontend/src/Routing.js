import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Portfolios from "./Pages/Portfolios";

const Routing = () => {
    return (
        <>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Portfolios />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </>
    )
}

export default Routing;