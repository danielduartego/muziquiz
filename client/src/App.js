import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth, userContext } from "./utils/auth";

import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Nav from "../src/components/Nav";

import styled from "styled-components/macro";
import { GlobalStyle, mixins, Main } from "../src/styles";
import Loading from "./components/icons/loading";

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const App = () => {
  const { loading, user, points } = useAuth();

  return (
    <userContext.Provider value={{ user, loading, points }}>
      <AppContainer>
        <GlobalStyle />
        {loading ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <Router>
            <Nav />
            {user ? <Home /> : <Login />}
          </Router>
        )}
      </AppContainer>
    </userContext.Provider>
  );
};

export default App;
