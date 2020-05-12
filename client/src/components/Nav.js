import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { logout } from "../spotify";
import styled from "styled-components/macro";
import LogoIcon from "./icons/logo.js";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 20px;
`;

const LogoutButton = styled.button`
  background-color: ${colors.black};
  text-transform: uppercase;
  color: ${colors.grey};
  font-weight: 400;
  font-size: ${fontSizes.sm};
  &:hover {
    color: ${colors.white};
  }
`;

export class Nav extends Component {
  render() {
    const { token } = this.props;
    return (
      <Navbar>
        <Link exact to="/">
          <LogoIcon />
        </Link>

        {token ? <LogoutButton onClick={logout}>Logout</LogoutButton> : null}
      </Navbar>
    );
  }
}

export default Nav;
