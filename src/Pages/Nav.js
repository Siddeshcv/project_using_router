import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import About from "./About";
import FeedBack from "./FeedBack";
import Home from "./Home";

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/feedback">feedback</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
