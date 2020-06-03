import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext, signOut } from "../hooks/auth";
import styled from "styled-components/macro";
import LogoIcon from "./icons/logo.js";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  height: 90px;
`;

const LogoutButton = styled.button`
  background-color: ${colors.black};
  text-transform: uppercase;
  color: ${colors.grey};
  padding: 0;
  font-weight: 400;
  font-size: ${fontSizes.sm};
`;

export class Nav extends Component {
  static contextType = userContext;
  render() {
    const { user } = this.context;
    return (
      <Navbar>
        <Link to="/">
          <LogoIcon />
        </Link>
        {user ? (
          <LogoutButton onClick={() => signOut()}>Logout</LogoutButton>
        ) : null}
      </Navbar>
    );
  }
}

export default Nav;
