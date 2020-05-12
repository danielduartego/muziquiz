import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import styled from "styled-components/macro";
import LogoIcon from "./icons/logo.js";

const Navbar = styled.nav`
  position: absolute;
  width: 100%;
  padding: 20px;
`;

export class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Router>
          <Link to="/">
            <LogoIcon />
          </Link>
        </Router>
      </Navbar>
    );
  }
}

export default Nav;
