import React, { Component, useContext, useEffect } from "react";
import styled from "styled-components/macro";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { userContext } from "../hooks/auth";
import Loading from "../components/icons/loading";
import { theme, mixins, Main, Button } from "../styles";
const { colors, fontSizes } = theme;

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

const GoogleLoginButton = styled(Button)`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.grey};
  text-transform: inherit;
  margin: 10px 0;
  img {
    border: none;
    display: inline-block;
    vertical-align: middle;
    height: 18px;
    width: 18px;
  }
  span {
    padding-left: 10px;
    letter-spacing: 0px;
  }
`;

const FacebookLoginButton = styled(Button)`
  width: 100%;
  background-color: #3b5998;
  color: ${colors.white};
  text-transform: inherit;
  margin: 10px 0;
  img {
    border: none;
    display: inline-block;
    vertical-align: middle;
    height: 18px;
    width: 18px;
  }
  span {
    padding-left: 10px;
    letter-spacing: 0px;
  }
`;

// Firebase Initialization
firebase.initializeApp({
  apiKey: "AIzaSyDSQkZzRRA85gH5dsbe_NkLC8a6hl0fQf0",
  authDomain: "muziquiz-app.firebaseapp.com",
});

export class login extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default login;
