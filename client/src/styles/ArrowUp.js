import React from "react";
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

const Points = styled.h6`
  position: absolute;
  margin-top: 35px;
  font-weight: 400;
  color: ${colors.grey};
  font-size: ${fontSizes.sm};
  text-transform: uppercase;
`;

export default ({ points }) => (
  <Container>
    <ArrowUp />
    <Number>{points}</Number>
    <Points>Points</Points>
  </Container>
);
