import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth, userContext } from "./hooks/auth";

import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Nav from "../src/components/Nav";

import styled from "styled-components/macro";
import { GlobalStyle, mixins, Main } from "../src/styles";

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const App = () => {
  const { user } = useAuth();
  return (
    <userContext.Provider value={{ user }}>
      <AppContainer>
        <GlobalStyle />
        <Router>
          <Nav />
          {user ? <Home /> : <Login />}
        </Router>
      </AppContainer>
    </userContext.Provider>
  );
};

export default App;
