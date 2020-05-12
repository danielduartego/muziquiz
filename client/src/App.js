import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components/macro";
import { GlobalStyle } from "./styles";

import Nav from "./components/Nav";
import Login from "./pages/login";
import Home from "./pages/home";
import { token } from "./spotify";

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
        <Router>
          <Nav token={token} />
          {token ? <Home /> : <Login />}
        </Router>
      </AppContainer>
    );
  }
}

export default App;
