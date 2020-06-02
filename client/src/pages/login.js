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
  static contextType = userContext;

  state = {
    loading: false,
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  loginWithFacebook = () => {
    this.setState({ loading: true });
    let facebookProvider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
        console.log(token, user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  loginWithGoogle = () => {
    this.setState({ loading: true });
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  createUser = () => {
    this.setState({ loading: true });
    const email = "dan@user.com";
    const password = "123456";
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (user) {
        window.location = window.location.origin;
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  signInUser = () => {
    this.setState({ loading: true });
    const email = "joeh@doe.com";
    const password = "123456";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    const { loading } = this.state;

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

            <button onClick={this.loginWithFacebook}>
              Login with facebook
            </button>
            <button onClick={this.loginWithGoogle}>Login with google</button>
            <button onClick={this.createUser}>create user</button>
            <button onClick={this.signInUser}>sign in user john doe</button>
          </div>
        )}
      </Container>
    );
  }
}

export default login;
