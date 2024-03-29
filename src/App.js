// import logo from './logo.svg';
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about/About";
import Drawer from "./components/Drawer/Drawer";
import Blog from "./components/blog/Blog";
import Service from "./components/service/Service";
import Project from "./components/project/Project";
import Single from "./components/single/Single";
import Blogform from "./components/blog form/Blogform";
import Login from "./components/login/Login";
import Projectform from "./components/project/projectform";
import Aboutform from "./components/about/Aboutform";
import Serviceform from "./components/service/serviceform";
import Signupform from "./components/login/Signupform";
import Teamform from "./components/about/Teamform";
import { Order } from "./components/orders/order";
import { Users } from "./components/login/users";
import { Dashbord } from "./components/dashbord/Dashbord";
import { Contact } from "./components/contact/contact";
import { Forget } from "./components/login/forget";
import { Profile } from "./components/Drawer/profile";

function App() {
  return (
    // <>hello</>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashbord">
          <Dashbord />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/drawer">
          <Drawer />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/Single">
          <Single />
        </Route>
        <Route path="/Blogform/:id?">
          <Blogform />
        </Route>
        <Route path="/projectform">
          <Projectform />
        </Route>
        <Route path="/serviceform">
          <Serviceform />
        </Route>
        <Route path="/Teamform">
          <Teamform />
        </Route>
        <Route path="/aboutform">
          <Aboutform />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signupform">
          <Signupform />
        </Route>
        <Route path="/forget">
          <Forget />
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
