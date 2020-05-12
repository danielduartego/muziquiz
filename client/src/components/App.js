import React, { Component } from "react";

import styled from "styled-components/macro";
import { GlobalStyle } from "../styles";

import Nav from "./Nav";
import Login from "./Login";
import Profile from "./Profile";
import { token } from "../spotify";

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

class App extends Component {
  state = {
    token: "",
  };

  componentDidMount() {
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    return (
      <AppContainer>
        <GlobalStyle />
        <Nav token={token} />
        {token ? <Profile /> : <Login />}
      </AppContainer>
    );
  }
}

export default App;
