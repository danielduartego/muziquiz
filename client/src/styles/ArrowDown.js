import React from "react";
import ArrowDown from "../components/icons/arrowDown.js";
import styled from "styled-components/macro";
import { theme, mixins } from ".";
const { fontSizes, colors } = theme;

const Container = styled.div`
  ${mixins.flexCenter};
`;
const Number = styled.h1`
  margin: 10px;
  color: ${colors.red};
  font-size: ${fontSizes.xxl};
  transition: ${theme.transition};
`;

export default ({ points }) => (
  <Container>
    <ArrowDown />
    <Number>{points}</Number>
  </Container>
);
