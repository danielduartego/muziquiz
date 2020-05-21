import React, { Component } from "react";
import styled from "styled-components/macro";
import { theme, mixins, Main, Button } from "../styles";
const { colors, fontSizes } = theme;

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://muziquiz.herokuapp.com/login";

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

export class login extends Component {
  render() {
    return (
      <Container>
        <h1>
          Hello,{" "}
          <span role="img" aria-label="hello">
            👋
          </span>
        </h1>
        <h1>Welcome to Muziquiz</h1>
        <h6>
          Before we start, let’s first
          <br /> connect to your Spotify account.
        </h6>
        <ButtonContainer>
          <LoginButton href={LOGIN_URI}>Log in to Spotify</LoginButton>
        </ButtonContainer>
      </Container>
    );
  }
}

export default login;
