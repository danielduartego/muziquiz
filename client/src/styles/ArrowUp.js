import React, { Component } from "react";
import ArrowUp from "../components/icons/arrowUp.js";
import styled from "styled-components/macro";
import { theme, mixins } from "../styles";
const { fontSizes, colors } = theme;

const Container = styled.div`
  ${mixins.flexCenter};
`;
const Number = styled.h1`
  margin: 10px;
  color: ${colors.green};
  font-size: ${fontSizes.xxl};
  transition: ${theme.transition};
`;

export default ({ points }) => (
  <Container>
    <ArrowUp />
    <Number>{points}</Number>
  </Container>
);
