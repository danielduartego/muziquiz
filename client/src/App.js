import React, { Component, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";

import { UserContext } from "./contexts/userContext";
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Nav from "../src/components/Nav";

import styled from "styled-components/macro";
import { GlobalStyle } from "../src/styles";

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

class App extends Component {
  static contextType = UserContext;

  // componentWillMount = () => {
  //     firebase.auth().onAuthStateChanged((user) => {
  //         const { updateUser, isSignedIn } = this.context;
  //         console.log('inside did mount 1', isSignedIn);
  //         console.log('current user ', firebase.auth().currentUser);
  //         if (user && !isSignedIn) {
  //             console.log('inside did mount 2', isSignedIn);
  //             // updateUser(user);
  //         }
  //         console.log(user);
  //     });
  // };

  render() {
    const { isSignedIn } = this.context;
    console.log("from app", firebase.auth().currentUser);

    return (
      <AppContainer>
        <GlobalStyle />
        <Router>
          <Nav />
          {firebase.auth().currentUser ? <Home /> : <Login />}
        </Router>
      </AppContainer>
    );
  }
}

export default App;
