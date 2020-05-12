import React, { Component } from "react";
import styled from "styled-components/macro";
import { theme, mixins, Main } from "../styles";
const { colors, fontSizes } = theme;

const Container = styled(Main)`
  ${mixins.flexLeft};
  flex-direction: column;
  min-height: 100vh;
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

export class Profile extends Component {
  render() {
    return <Container>Profile</Container>;
  }
}

export default Profile;
