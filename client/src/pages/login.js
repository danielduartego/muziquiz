import React, { Component, useContext } from "react";
import styled from "styled-components/macro";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UserContext } from "../contexts/userContext";
import Loading from "../components/icons/loading";
import { theme, mixins, Main, Button } from "../styles";
const { colors, fontSizes } = theme;
require("dotenv").config();

// Components
const Container = styled(Main)`
  ${mixins.flexLeft};
  flex-direction: column;
  h1 {
    font-size: ${fontSizes.xxl};
    margin: -5px 0;
  }
  h6 {
    color: ${colors.grey};
    font-size: ${fontSizes.lg};
    margin: 30px 0;
  }
`;

const ButtonContainer = styled.div`
  display: contents;
`;

const LoginButton = styled(Button)`
  width: 100%;
  background-color: ${colors.green};
  color: ${colors.white};
  &:hover {
    background-color: ${colors.offGreen};
  }
`;

// Firebase Initialization
firebase.initializeApp({
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  apiKey: "AIzaSyDSQkZzRRA85gH5dsbe_NkLC8a6hl0fQf0",
  authDomain: "muziquiz-app.firebaseapp.com",
});

export class login extends Component {
  static contextType = UserContext;

  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      const { updateUser, isSignedIn } = this.context;
      console.log("inside did mount 1", isSignedIn);
      console.log("current user ", firebase.auth().currentUser);
      if (!firebase.auth().currentUser) {
        console.log("inside did mount 2", isSignedIn);
        updateUser(user);
      }
    });
  };

  render() {
    const { loading } = this.context;
    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>
              Hello,{" "}
              <span role="img" aria-label="hello">
                👋
              </span>
            </h1>
            <h1>Welcome to Muziquiz</h1>
            <h6>Before we start, let’s first login.</h6>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </Container>
    );
  }
}

export default login;
